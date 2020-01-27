import { all, takeLatest } from 'redux-saga/effects';
import { LOGIN, REGISTER, GET_MOVIES, GET_MOVIES_BY_PAGE, GET_MOVIES_COUNT, GET_MOVIE_BY_ID, GO_TO_MOVIE_DETAILS } from '../actions/ActionTypes';
import { userLogin, userRegister } from './AuthSagas';
import { moviesGet, moviesGetByPage , moviesGetCount, getMovieById, goToMovieDetails} from './MovieSagas';


export default function* rootSaga() {
  yield all([
    takeLatest(LOGIN, userLogin),
    takeLatest(REGISTER, userRegister),
    takeLatest(GET_MOVIES, moviesGet),
    takeLatest(GET_MOVIE_BY_ID, getMovieById),
    takeLatest(GET_MOVIES_BY_PAGE, moviesGetByPage),
    takeLatest(GET_MOVIES_COUNT, moviesGetCount),
    takeLatest(GO_TO_MOVIE_DETAILS, goToMovieDetails)
  ]);
}
