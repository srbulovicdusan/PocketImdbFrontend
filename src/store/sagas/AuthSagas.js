import { call, put } from 'redux-saga/effects';
import { push, go } from 'connected-react-router';

import { authUser, loginError, registerError } from '../actions/AuthActions';
import AuthService from '../../services/AuthService';
import { putWatchlist, putUserReactions } from '../actions/MovieActions';

export function* userLogin({ payload }) {
  try {
    const data = yield call(AuthService.login, payload);
    yield put(putWatchlist(data.watchlist));
    yield put(putUserReactions(data.reactions));
    yield put(authUser(true));
    yield put(push('/home'));
    
  } catch (error) {
    yield put(loginError(true));
  }
}

export function* userRegister({ payload }) {
  try {
    yield call(AuthService.signup, payload);
    yield put(push('/login'));
    yield put(go());
  } catch (error) {
    yield put(registerError(true));
  }
}
