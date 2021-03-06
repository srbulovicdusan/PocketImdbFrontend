

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
  SEARCH_MOVIE_OMDB,
  PUT_SEARCH_RESULT,
  POST_MOVIE_OMDB,
  FETCH_RELATED_MOVIES,
  PUT_RELATED_MOVIES,
  POST_MOVIE,
  ADD_MOVIE_ERROR,
  PUT_LOAD_MORE_COMMENTS,
  POST_MOVIE_REACTION, 
  PUT_MOVIE_REACTION,
  PUT_WATCHLIST,
  PUT_NEW_WATCHLIST_ITEM,
  POST_NEW_WATCHLIST_ITEM,
  FETCH_USER_WATCHLIST,
  DELETE_WATCHLIST_ITEM,
  REMOVE_WATCHLIST_ITEM,
  EDIT_WATHCLIST_ITEM,
  PUT_EDIT_WATCHLIST_ITEM,
  FETCH_POPULAR_MOVIES,
  PUT_POPULAR_MOVIES,
  PUT_INCREASE_VISITS,
  PUT_USER_REACTIONS} from './ActionTypes';
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
export const putVisit = payload =>{
  return {
    type: PUT_INCREASE_VISITS,
    payload
  };
}

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
export const fetchRelatedMovies = (payload) =>{
  return {
    type: FETCH_RELATED_MOVIES,
    payload
  }
}
export const putRelatedMovies = (payload) =>{
  return {
    type: PUT_RELATED_MOVIES,
    payload
  }
}
export const fetchPopularMovies = (payload) =>{
  return {
    type: FETCH_POPULAR_MOVIES,
    payload
  }
}
export const putPopularMovies = (payload) =>{
  return {
    type: PUT_POPULAR_MOVIES,
    payload
  }
}
export const postMovie = (payload) =>{
  return {
    type: POST_MOVIE,
    payload
  }
}
export const searchMovieOmdb = (payload) =>{
  return {
    type: SEARCH_MOVIE_OMDB,
    payload
  }
}
export const putSearchResult = (payload) =>{
  return {
    type: PUT_SEARCH_RESULT,
    payload
  }
}
export const postMovieOmdb = payload =>{
  return {
    type: POST_MOVIE_OMDB,
    payload
  }
}
export const addMovieError = (payload) =>{
  return {
    type: ADD_MOVIE_ERROR,
    payload
  }
}
export const putLoadMoreComments = (payload) =>{
  return {
    type: PUT_LOAD_MORE_COMMENTS,
    payload
  }
}
export const putWatchlist = (payload) =>{
  return {
    type: PUT_WATCHLIST,
    payload
  }
}
export const putNewWatchlistItem = (payload) =>{
  return {
    type: PUT_NEW_WATCHLIST_ITEM,
    payload
  }
}
export const postNewWatchlistItem = (payload) =>{
  return {
    type: POST_NEW_WATCHLIST_ITEM,
    payload
  }
}
export const fetchUserWatchlist = (payload) =>{
  return {
    type: FETCH_USER_WATCHLIST,
    payload
  }
}
export const deleteWatchlistItem = (payload) =>{
  return {
    type: DELETE_WATCHLIST_ITEM,
    payload
  }
}
export const removeWatchlistItem = (payload) =>{
  return {
    type: REMOVE_WATCHLIST_ITEM,
    payload
  }
}
export const editWatchlistItem = (payload) =>{
  return {
    type: EDIT_WATHCLIST_ITEM,
    payload
  }
}
export const putEditWatchlistItem = payload =>{
  return {
    type: PUT_EDIT_WATCHLIST_ITEM,
    payload
  }
}
export const putUserReactions = payload =>{
  return {
    type: PUT_USER_REACTIONS,
    payload
  }
}
