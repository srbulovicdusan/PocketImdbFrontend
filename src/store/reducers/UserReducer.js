import { PUT_WATCHLIST, PUT_NEW_WATCHLIST_ITEM } from '../actions/ActionTypes';

const initialState = {
  watchlist: []
};
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case PUT_WATCHLIST:
        return {...state, watchlist:[...action.payload]}
    case PUT_NEW_WATCHLIST_ITEM:
        return {...state, watchlist:[...state.watchlist, action.payload]}
    default:
      return state;
  }
};

export default userReducer;