import {Component, Input, SimpleChanges, OnChanges, Output, EventEmitter} from '@angular/core';
import {Movie} from "../movies/movies.model";
import {MatDialog} from "@angular/material";
import {EmptyListDialogComponent} from "./movie-list-empty-dialog.component";

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['movie-list.component.scss']
})
export class MovieListComponent implements OnChanges {

  @Input() movies : Array<Movie>;
  @Output() selectMovie = new EventEmitter();

  selectedMovie : Movie;

  constructor(public dialog: MatDialog) { }

  setActiveMovieAndEmit(movie){
    this.selectedMovie = movie;
    this.selectMovie.emit(movie);
  }

  showDialog(){
    let dialogRef = this.dialog.open(EmptyListDialogComponent, {
      width: '250px'
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    (changes.movies.previousValue == 0 && changes.movies.currentValue.length == 0) && this.showDialog();
  }

}


