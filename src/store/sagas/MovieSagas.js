import { call, put, take } from 'redux-saga/effects';

import { movieService } from '../../services/MovieService';

import { setMovies, setMoviesCount, setMovie } from '../actions/MovieActions';
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
export function* moviesGetByPage(payload){
    const {data} = yield call(movieService.getMoviesByPage, payload.payload)
    yield put(setMovies(data));
}
export function* moviesGetCount(){
    const {data} = yield call(movieService.getMoviesCount);
    yield put(setMoviesCount(data));
}
