import { Component, EventEmitter, Input, Output } from '@angular/core';
import { OmdbMovie } from '../../types/movie';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent {

  @Input()
  public movie: OmdbMovie;

  @Output()
  public expand: EventEmitter<string> = new EventEmitter<string>();

  public expanded = false;
  public loading = false;

  public expandDetails(): void {
    this.expand.emit(this.movie.imdbID);
    this.loading = true;
    this.expanded = true;
  }
}
