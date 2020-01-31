import { call, put, delay } from 'redux-saga/effects';
import { push, go, navigate } from 'connected-react-router';
import { movieService } from '../../services/MovieService';
import {commentService} from '../../services/CommentService';
import {userService} from '../../services/UserService';
import { setMovies, setMoviesCount, setMovie, putComments, setCurrentPage, putNewComment, putWatchlist, putNewWatchlistItem} from '../actions/MovieActions';
import { GET_MOVIES_BY_PAGE } from '../actions/ActionTypes';

export function* addToWatchList({payload}){
    const {data} = yield call(userService.addToWatchlist, payload);
    yield put(putNewWatchlistItem(payload));
}
export function* getWatchlistForUser(){
    const {data} = yield call(userService.getWatchList);
    yield put(putWatchlist(data));
}