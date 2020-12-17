import { Component } from '@angular/core';
import { OmdbApiService } from './api/omdb-api.service';
import { OmdbMovie } from './types/movie';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public movieResults: Observable<OmdbMovie[]>;

  public searchState: 'idle' | 'results' | 'error' = 'idle';

  constructor(private omdbApi: OmdbApiService) {
  }

  public onSearchMovies(searchInput: string): void {
    this.searchState = 'results';
    this.movieResults = this.omdbApi.getMoviesBySearchInput(searchInput)
      .pipe(
        map(response => {
          if (response.Response === 'True') {
            this.searchState = 'results';
            return response.Search;
          }
          if (response.Response === 'False') {
            this.searchState = 'error';
          }
        }),
      );
  }
}
