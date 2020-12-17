export interface OmdbMovie {
  Title: string;
  Year: string;
  Poster: string;
  imdbID: string;
  type: string;
  details?: OmdbMovieDetails;
  noDetailsFound?: boolean;
}

export interface OmdbMovieDetails {
  imdbID: string;
  Plot: string;
  Actors: string[];
  Ratings: {
    Source: string;
    Value: string;
  }[];
}
