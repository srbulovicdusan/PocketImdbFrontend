import { all, takeLatest } from 'redux-saga/effects';

import { LOGIN, REGISTER, GET_MOVIES, GET_MOVIES_BY_PAGE, GET_MOVIES_COUNT, GET_MOVIE_BY_ID, SET_SELECTED_MOVIE, SEARCH_INPUT_CHANGED , INCREASE_MOVIE_VISITS, GET_COMMENTS_BY_MOVIE, POST_COMMENT, GET_ALL_GENRES, PUT_SELECTED_GENRE, DELETE_SELECTED_GENRE, POST_MOVIE_REACTION } from '../actions/ActionTypes';
import { userLogin, userRegister } from './AuthSagas';
import { moviesGet, moviesGetByPage , moviesGetCount, getMovieById,setSelectedMovie, handleMovieSearch, commentsGet, postComment, increaseMovieVisits , postMovieReaction} from './MovieSagas';
import { getAllGenres, addSelectedGenre, removeSelectedGenre } from './GenreSagas';


export default function* rootSaga() {
  yield all([
    takeLatest(LOGIN, userLogin),
    takeLatest(REGISTER, userRegister),
    takeLatest(GET_MOVIES, moviesGet),
    takeLatest(GET_MOVIE_BY_ID, getMovieById),
    takeLatest(GET_MOVIES_BY_PAGE, moviesGetByPage),
    takeLatest(GET_MOVIES_COUNT, moviesGetCount),
    //takeLatest(GO_TO_MOVIE_DETAILS, goToMovieDetails),
    takeLatest(POST_MOVIE_REACTION, postMovieReaction),
    takeLatest(SET_SELECTED_MOVIE, setSelectedMovie),
    takeLatest(SEARCH_INPUT_CHANGED, handleMovieSearch),

    takeLatest(GET_ALL_GENRES, getAllGenres),

    takeLatest(GET_COMMENTS_BY_MOVIE, commentsGet),
    takeLatest(POST_COMMENT, postComment),
    takeLatest(INCREASE_MOVIE_VISITS, increaseMovieVisits)
  ]);
}
