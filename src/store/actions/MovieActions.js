

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
  SEARCH_INPUT_CHANGED,
  PUT_NEW_COMMENT,
  GET_COMMENTS_BY_MOVIE,
  PUT_COMMENTS, 
  POST_COMMENT,
  GET_ALL_GENRES,
  PUT_GENRES,
  PUT_SELECTED_GENRE,
  DELETE_SELECTED_GENRE,
  INCREASE_MOVIE_VISITS,
  POST_MOVIE_REACTION, 
  PUT_MOVIE_REACTION} from './ActionTypes';
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
};

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
export const putNewComment = (payload)=>{
  return {
    type: PUT_NEW_COMMENT,
    payload
  }
}
export const postComment = (payload)=>{
  return {
    type: POST_COMMENT,
    payload
  };
}
export const increaseMovieVisits = (payload) =>{
  return {
    type: INCREASE_MOVIE_VISITS,
    payload
  };
}
export const getAllGenres = () =>{
  return {
    type: GET_ALL_GENRES
  };
}
export const putGenres = (payload) =>{
  return {
    type: PUT_GENRES,
    payload
  };
}
export const putSelectedGenre = (payload) =>{
  return {
    type: PUT_SELECTED_GENRE,
    payload
  }
}
export const deleteSelectedGenre = (payload) =>{
  return {
    type: DELETE_SELECTED_GENRE,
    payload
  }
}
