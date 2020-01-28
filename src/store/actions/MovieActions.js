import { GET_MOVIES, SET_MOVIES, GET_MOVIES_BY_PAGE, SET_MOVIES_COUNT, GET_MOVIES_COUNT, GET_MOVIE_BY_ID, SET_MOVIE, GO_TO_MOVIE_DETAILS, POST_MOVIE_REACTION, PUT_MOVIE_REACTION} from './ActionTypes';
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
export const goToMovieDetails = (payload) =>{
  return {
    type: GO_TO_MOVIE_DETAILS,
    payload
  };
}
export const postMovieReaction = (payload) =>{
  return {
    type: POST_MOVIE_REACTION,
    payload
  };
}
export const putMovieReaction = (payload) =>{
  return {
    type: PUT_MOVIE_REACTION,
    payload
  };
}
