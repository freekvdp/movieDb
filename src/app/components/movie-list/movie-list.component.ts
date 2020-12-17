import { Component, Input } from '@angular/core';
import { OmdbMovie } from '../../types/movie';
import { take } from 'rxjs/operators';
import { OmdbApiService } from '../../api/omdb-api.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent {

  @Input()
  movies: OmdbMovie[];

  constructor(private omdbApi: OmdbApiService) {
  }

  public getMovieDetails(imdbId): void {
    this.omdbApi.getMovieDetailsById(imdbId)
      .pipe(
        take(1)
      )
      .subscribe(movieDetails => {
        const expandedMovie = this.movies.find(m => m.imdbID === imdbId);
        if (expandedMovie) {
          expandedMovie.details = movieDetails;
        } else {
          expandedMovie.details = null;
          expandedMovie.noDetailsFound = true;
        }
      });
  }
}
