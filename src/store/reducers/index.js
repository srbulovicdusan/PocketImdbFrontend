import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import authReducer from './AuthReducer';
import errorReducer from './ErrorReducer';
import movieReducer from './MovieReducer';
import genreReducer from './GenreReducer';
import userReducer from './UserReducer';
export default history =>
  combineReducers({
    authUser: authReducer,
    error: errorReducer,
    movie: movieReducer,
    genre: genreReducer,
    user: userReducer,
    router: connectRouter(history)
  });
