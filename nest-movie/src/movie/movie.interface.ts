export interface Movie {
  id: number;
  title: string;
  year: number;
}

export type MovieInput = Omit<Movie, 'id'>;
