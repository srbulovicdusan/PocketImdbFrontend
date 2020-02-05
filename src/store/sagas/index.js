import { all, takeLatest } from 'redux-saga/effects';

import { LOGIN, REGISTER, GET_MOVIES, GET_MOVIES_BY_PAGE, GET_MOVIES_COUNT, GET_MOVIE_BY_ID, SET_SELECTED_MOVIE, SEARCH_INPUT_CHANGED , INCREASE_MOVIE_VISITS, GET_COMMENTS_BY_MOVIE, POST_COMMENT, GET_ALL_GENRES, PUT_SELECTED_GENRE, DELETE_SELECTED_GENRE, POST_MOVIE, SEARCH_MOVIE_OMDB, POST_MOVIE_OMDB} from '../actions/ActionTypes';
import { userLogin, userRegister } from './AuthSagas';
import { moviesGet, moviesGetByPage , moviesGetCount, getMovieById,setSelectedMovie, handleMovieSearch, commentsGet, postComment, increaseMovieVisits, createMovie, searchMovieOMDB, postMovieOmdb} from './MovieSagas';
import { getAllGenres, addSelectedGenre, removeSelectedGenre } from './GenreSagas';


export default function* rootSaga() {
  yield all([
    takeLatest(LOGIN, userLogin),
    takeLatest(REGISTER, userRegister),
    takeLatest(GET_MOVIES, moviesGet),
    takeLatest(GET_MOVIE_BY_ID, getMovieById),
    takeLatest(GET_MOVIES_BY_PAGE, moviesGetByPage),
    takeLatest(SET_SELECTED_MOVIE, setSelectedMovie),
    takeLatest(SEARCH_INPUT_CHANGED, handleMovieSearch),

    takeLatest(GET_ALL_GENRES, getAllGenres),

    takeLatest(GET_COMMENTS_BY_MOVIE, commentsGet),
    takeLatest(POST_COMMENT, postComment),
    takeLatest(INCREASE_MOVIE_VISITS, increaseMovieVisits),
    takeLatest(POST_MOVIE, createMovie),
    takeLatest(SEARCH_MOVIE_OMDB, searchMovieOMDB),
    takeLatest(POST_MOVIE_OMDB, postMovieOmdb)

  ]);
}
