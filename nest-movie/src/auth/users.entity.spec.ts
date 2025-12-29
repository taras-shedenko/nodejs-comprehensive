import { Users } from './users.entity';

describe('UserEntity', () => {
  it('should be defined', () => {
    expect(new Users()).toBeDefined();
  });
});
