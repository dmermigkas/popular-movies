import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {AppConfig} from "../app.config";
import {Http} from "@angular/http";
import {Store} from "@ngrx/store";
import {AppStore} from "../app.store.model";

@Injectable()
export class MoviesService {

  movies: Observable<Array<any>>;

  constructor(private http: Http, private store: Store<AppStore>) {
    this.movies = store.select(state => state.movies);
  }

  getMostPopularMovies(){

    return this.http
      .get(
        AppConfig.mainUrl + `discover/movie?api_key=${AppConfig.apikey}&sort_by=popularity.desc`,
      )
      .map(res => res.json().results)
      .map(payload => ({ type: 'ADD_MOVIES', payload }))
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'))
      .subscribe(action => this.store.dispatch(action));

  }

}
