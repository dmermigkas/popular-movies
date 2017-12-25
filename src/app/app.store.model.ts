import {Movie} from './movies/movies.model';

export interface AppStore {
  movies: Movie[];
  selectedMovie: Movie;
}
