import { Movies } from './movies.entity';

describe('MoviesEntity', () => {
  it('should be defined', () => {
    expect(new Movies()).toBeDefined();
  });
});
