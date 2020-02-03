import { call, put, delay } from 'redux-saga/effects';
import { push, go, navigate } from 'connected-react-router';
import { movieService } from '../../services/MovieService';
import {commentService} from '../../services/CommentService';
import {userService} from '../../services/UserService';
import { setMovies, setMoviesCount, setMovie, putComments, setCurrentPage, putNewComment, putWatchlist, putNewWatchlistItem, removeWatchlistItem, putEditWatchlistItem} from '../actions/MovieActions';
import { GET_MOVIES_BY_PAGE } from '../actions/ActionTypes';

export function* addToWatchList({payload}){
    const {data} = yield call(userService.addToWatchlist, payload);
    yield put(putNewWatchlistItem(data));
}
export function* getWatchlistForUser(){
    const {data} = yield call(userService.getWatchList);
    yield put(putWatchlist(data));
}
export function* deleteWatchListItem({payload}){
    yield call(userService.removeFromWatchlist, payload);
    yield put(removeWatchlistItem(payload))
}
export function* editWatchlistItem({payload}){
    const {data} = yield call(userService.editWatchlistItem, payload);
    yield put(putEditWatchlistItem(data));
}