import { call, put } from 'redux-saga/effects';

import { movieService } from '../../services/MovieService';
import { setMovies, setMovie } from '../actions/MovieActions';

export function* moviesGet() {
  try {
    const { data } = yield call(movieService.getMovies);

    yield put(setMovies(data));
  } catch (error) {
    console.log({ error }); /*eslint-disable-line*/
  }
}
export function* getMovieById({payload}){
  const {data} = yield call(movieService.getMovieById, payload.id);
  yield put(setMovie(data));
}
