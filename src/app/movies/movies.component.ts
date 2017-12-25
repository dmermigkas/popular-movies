import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {MoviesService} from "./movies.service";
import {Store} from "@ngrx/store";
import {AppStore} from "../app.store.model";
import {Movie} from "./movies.model";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['movies.component.scss']
})
export class MoviesComponent implements OnInit {

  movies : Observable<Array<Movie>>;
  selectedMovie : Observable<Movie>;

  constructor(private moviesService: MoviesService,
              private store: Store<AppStore>) {

    this.selectedMovie = store.select(state => state.selectedMovie);

  }

  ngOnInit(){
    this.movies = this.moviesService.movies;
    this.moviesService.getMostPopularMovies();
  }

  onMovieSelected(movie){
    this.store.dispatch({type: 'SELECT_MOVIE', payload: movie});
  }

}
