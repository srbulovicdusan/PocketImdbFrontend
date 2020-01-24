import { GET_MOVIES, SET_MOVIES, GET_MOVIE_BY_ID, SET_MOVIE } from './ActionTypes';

export const getMovies = () => {
  return {
    type: GET_MOVIES
  };
};
export const getMovieById = (payload) => {
  return {
    type: GET_MOVIE_BY_ID,
    payload
  };
};

export const setMovies = payload => {
  return {
    type: SET_MOVIES,
    payload
  };
};
export const setMovie = payload => {
  return {
    type: SET_MOVIE,
    payload
  };
};
