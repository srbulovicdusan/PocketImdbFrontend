import { 
  GET_MOVIES,
  SET_MOVIES, 
  GET_MOVIES_BY_PAGE, 
  SET_MOVIES_COUNT, 
  GET_MOVIES_COUNT, 
  GET_MOVIE_BY_ID, 
  SET_MOVIE, 
  GO_TO_MOVIE_DETAILS,
  GET_COMMENTS_BY_MOVIE,
  PUT_COMMENTS, 
  POST_COMMENT,
  INCREASE_MOVIE_VISITS} from './ActionTypes';

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

export const getCommentsByMovie = (payload)=>{
  return {
    type: GET_COMMENTS_BY_MOVIE,
    payload
  };
}
export const putComments = (payload)=>{
  return {
    type: PUT_COMMENTS,
    payload
  };
}
export const postComment = (payload)=>{
  return {
    type: POST_COMMENT,
  };
}
export const increaseMovieVisits = (payload) =>{
  return {
    type: INCREASE_MOVIE_VISITS,
    payload
  };
}
