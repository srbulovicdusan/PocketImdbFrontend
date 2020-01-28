import { call, put, take } from 'redux-saga/effects';
import { push, go, navigate } from 'connected-react-router';

import { movieService } from '../../services/MovieService';

import { setMovies, setMoviesCount, setMovie, putMovieReaction } from '../actions/MovieActions';
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
  console.log("neee")
  const {data} = yield call(movieService.getMovieById, payload.id);
  yield put(setMovie(data));
}
export function* moviesGetByPage(action){
    const {data} = yield call(movieService.getMoviesByPage, action.payload)
    yield put(setMovies(data));
}
export function* moviesGetCount(){
    const {data} = yield call(movieService.getMoviesCount);
    yield put(setMoviesCount(data));
}
export function* goToMovieDetails(action){
  yield put(setMovie(action.payload));
  //yield put(push('/movie/' + action.payload.id));
  //yield put(go());
}
export function* postMovieReaction(action){
    try{
      const {data} = yield call(movieService.postMovieReaction, action.payload);
      yield put(putMovieReaction(data));
    }catch{

    }
}
