import { 
  GET_MOVIES, 
  SET_MOVIES, 
  GET_MOVIES_BY_PAGE, 
  SET_MOVIES_COUNT, 
  GET_MOVIES_COUNT, 
  GET_MOVIE_BY_ID, 
  SET_MOVIE, 
  SET_SELECTED_MOVIE,
  SET_CURRENT_PAGE,
  SEARCH_INPUT_CHANGED} from './ActionTypes';
export const getMoviesByPage = payload =>{
  return {
    type: GET_MOVIES_BY_PAGE,
    payload
  }
}
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
  }
}
export const getMoviesCount = () =>{
  return {
    type : GET_MOVIES_COUNT
  }
}
export const setMoviesCount = (payload) =>{
  return {
    type: SET_MOVIES_COUNT,
    payload
  };
};
export const setSelectedMovie = (payload) =>{
  return {
    type: SET_SELECTED_MOVIE,
    payload
  };
}
export const searchInputChanged = payload =>{
  return {
    type: SEARCH_INPUT_CHANGED,
    payload
  }
}
export const setCurrentPage = (payload) =>{
  return {
    type: SET_CURRENT_PAGE,
    payload
  }
}
