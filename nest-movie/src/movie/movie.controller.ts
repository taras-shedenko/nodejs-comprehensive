import {
  Controller,
  UseGuards,
  Get,
  Post,
  Put,
  Delete,
  HttpCode,
  Param,
  Body,
} from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';
import { MovieService } from './movie.service';
import type { MovieInput } from './movie.interface';

@Controller('movie')
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @ApiOkResponse({ description: 'All available Movies' })
  @Get()
  getAllMovies() {
    return this.movieService.getAllMovies();
  }

  @ApiOkResponse({ description: 'The movie matching the given id' })
  @Get(':id')
  getOneMovie(@Param('id') id: string) {
    return this.movieService.getOneMovie(parseInt(id));
  }

  @ApiOkResponse({ description: 'The newly created movie' })
  @Post()
  createMovie(@Body() movie: MovieInput) {
    return this.movieService.createMovie(movie);
  }

  @ApiOkResponse({ description: 'The updated movie' })
  @Put(':id')
  updateMovie(@Param('id') id: string, @Body() movie: MovieInput) {
    return this.movieService.updateMovie(parseInt(id), movie);
  }

  @ApiOkResponse({ description: 'Nothing' })
  @Delete(':id')
  @HttpCode(204)
  removeMovie(@Param('id') id: string) {
    return this.movieService.removeMovie(parseInt(id));
  }
}
