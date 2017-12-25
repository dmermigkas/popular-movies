import {Component, OnInit, Input, SimpleChanges, OnChanges, Output, EventEmitter} from '@angular/core';
import {Movie} from "../movies/movies.model";

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['movie-list.component.scss']
})
export class MovieListComponent implements OnInit,OnChanges {

  @Input() movies : Array<Movie>;
  @Output() selectMovie = new EventEmitter();

  selectedMovie : Movie;

  constructor() { }

  ngOnInit() {

    // console.log(this.movies)

  }

  setActiveMovieAndEmit(movie){
    this.selectedMovie = movie;
    this.selectMovie.emit(movie);
  }

  ngOnChanges(changes: SimpleChanges) {
   console.log(changes)
  }

}
