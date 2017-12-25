import {movies} from "../movie-list/movies-list.reducer";
import {selectedMovie} from "../movie-details/movies-details.reducer";
import {ActionReducer, combineReducers} from "@ngrx/store";
import {compose} from "@ngrx/core/compose";
import {environment} from "../../environments/environment";

const reducers = {
  movies: movies,
  selectedMovie: selectedMovie
};

const developmentReducer: ActionReducer<any> = compose(combineReducers)(reducers);
const productionReducer: ActionReducer<any> = combineReducers(reducers);

export function reducer(state: any, action: any) {
  if (environment.production) {
    return productionReducer(state, action);
  } else {
    return developmentReducer(state, action);
  }
}
