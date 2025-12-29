import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Movies } from './movies.entity';
import type { MovieInput } from './movie.interface';

@Injectable()
export class MovieService {
  constructor(
    @InjectRepository(Movies)
    private readonly moviesRepository: Repository<Movies>,
  ) {}
  async getAllMovies() {
    const res = await this.moviesRepository.find();
    return res;
  }

  async getOneMovie(id: number) {
    const res = await this.moviesRepository.findOneBy({ id });
    return res;
  }

  async createMovie(movie: MovieInput) {
    const res = await this.moviesRepository.save(movie);
    return res;
  }

  async updateMovie(id: number, movie: MovieInput) {
    const res = await this.moviesRepository.save({ id, ...movie });
    return res;
  }

  async removeMovie(id: number) {
    const res = await this.moviesRepository.delete(id);
  }
}
