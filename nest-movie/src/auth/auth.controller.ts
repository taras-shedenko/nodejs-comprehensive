import { Controller, Post, Body, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Users } from './users.entity';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() user: Users) {
    const validatedUser = await this.authService.validate(
      user.username,
      user.password,
    );
    if (validatedUser) return this.authService.login(validatedUser);
    else throw new UnauthorizedException();
  }
}
