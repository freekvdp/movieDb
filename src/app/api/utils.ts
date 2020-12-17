import { API_KEY, API_URL } from '../../assets/static';

export class OmdbApiUtils {
  static makeQueryMoviesUrl(searchValue: string): string {
    return `${ API_URL }?s=${ searchValue }&type=movie&apikey=${ API_KEY }`;
  }

  static makeQueryMovieDetailsUrl(movieId: string): string {
    return `${ API_URL }?i=${ movieId }&apikey=${ API_KEY }`;
  }
}
