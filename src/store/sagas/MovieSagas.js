import { call, put, take } from 'redux-saga/effects';
import { push, go, navigate } from 'connected-react-router';

import { movieService } from '../../services/MovieService';
import {commentService} from '../../services/CommentService';
import { setMovies, setMoviesCount, setMovie, putComments } from '../actions/MovieActions';
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
  const comments = yield call(commentService.getAllByMovie, payload);
  yield put(setMovie(data));
  yield put(putComments(comments.data));
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
}
export function* commentsGet(action){
  const {data} = yield call(commentService.getAllByMovie, action.payload);
  yield put(putComments(data));
}
export function* postComment(action){
  const {data} = yield call(commentService.postComment, action.payload);
  yield put(putComments([data]));
}
