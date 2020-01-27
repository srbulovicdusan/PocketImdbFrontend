import { call, put, delay } from 'redux-saga/effects';
import { push, go, navigate } from 'connected-react-router';

import { movieService } from '../../services/MovieService';

import { setMovies, setMoviesCount, setMovie, setCurrentPage } from '../actions/MovieActions';
import { GET_MOVIES_BY_PAGE } from '../actions/ActionTypes';


export function* moviesGet() {
  try {
    const { data } = yield call(movieService.getMovies);
    yield put(setMovies(data));
  } catch (error){
    console.log({ error }); /*eslint-disable-line*/
  }
}
export function* getMovieById({payload}){
  const {data} = yield call(movieService.getMovieById, payload.id);
  yield put(setMovie(data));
}
export function* moviesGetByPage(action){
    const {data} = yield call(movieService.getMoviesByPage, action.payload)
    yield put(setMovies(data));
    yield put(setCurrentPage(action.payload.page));
}
export function* moviesGetCount(){
    const {data} = yield call(movieService.getMoviesCount);
    yield put(setMoviesCount(data));
}
export function* setSelectedMovie(action){
  yield put(setMovie(action.payload));
}
export function* handleMovieSearch(action){
    yield delay(750);
    if (action.payload !== ''){
      const {data} = yield call(movieService.searchMovie, action.payload);
      yield put(setMovies(data));
    }
}
