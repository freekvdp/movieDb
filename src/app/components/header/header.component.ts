import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @Output()
  public searchValue: EventEmitter<string> = new EventEmitter<string>();

  public searchMovieInput = '';

  public onSearchMovies(): void {
    const searchMovieValue = this.searchMovieInput;
    this.searchValue.emit(searchMovieValue);
  }
}
