import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OmdbApiUtils } from './utils';
import { OmdbMovie, OmdbMovieDetails } from '../types/movie';

interface OmdbSearchResult {
  Response: string;
  Search: OmdbMovie[];
}

@Injectable({
  providedIn: 'root'
})
export class OmdbApiService {

  constructor(private http: HttpClient) {
  }

  public getMoviesBySearchInput(searchValue): Observable<OmdbSearchResult> {
    const queryUrl = OmdbApiUtils.makeQueryMoviesUrl(searchValue);
    return this.http.get(queryUrl) as Observable<OmdbSearchResult>;
  }

  public getMovieDetailsById(imdbId: string): Observable<OmdbMovieDetails> {
    const queryUrl = OmdbApiUtils.makeQueryMovieDetailsUrl(imdbId);
    return this.http.get(queryUrl) as Observable<OmdbMovieDetails>;
  }
}
