import {ADD_MOVIES} from "../movies/movies.actions";

export const movies = (state: any = [], {type, payload}) => {
  switch (type) {
    case ADD_MOVIES:
      return payload;
    default:
      return state;
  }
};
