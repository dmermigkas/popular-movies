import {SELECT_MOVIE} from "../movies/movies.actions";

export const selectedMovie = (state: any = null, {type, payload}) => {
  switch (type) {
    case SELECT_MOVIE:
      return payload;
    default:
      return state;
  }
};
