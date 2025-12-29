import { createHash } from 'crypto';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { JwtService } from '@nestjs/jwt';
import { Repository } from 'typeorm';
import { Users } from './users.entity';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Users)
    private readonly usersRepository: Repository<Users>,
    private readonly jwtService: JwtService,
  ) {}

  async validate(username: string, password: string) {
    const foundUser = await this.usersRepository.findOneBy({ username });
    if (foundUser) {
      const { password: foundPassword, ...validatedUser } = foundUser;
      if (foundPassword === createHash('md5').update(password).digest('hex'))
        return validatedUser;
    }
  }

  login(user: Omit<Users, 'password'>) {
    return {
      access_token: this.jwtService.sign({
        username: user.username,
        sub: user.id,
      }),
    };
  }
}
