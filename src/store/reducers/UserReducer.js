import { PUT_WATCHLIST, PUT_NEW_WATCHLIST_ITEM ,REMOVE_WATCHLIST_ITEM, PUT_EDIT_WATCHLIST_ITEM} from '../actions/ActionTypes';

const initialState = {
  watchlist: []
};
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case PUT_WATCHLIST:
        return {...state, watchlist:[...action.payload]}
    case PUT_NEW_WATCHLIST_ITEM:
        return {...state, watchlist:[...state.watchlist, action.payload]}
    case REMOVE_WATCHLIST_ITEM:
        let itemIndex = state.watchlist.findIndex(elem => elem.id === action.payload.id);
        return {...state, watchlist:[...state.watchlist.slice(0, itemIndex), ...state.watchlist.slice(itemIndex+1)]}
    case PUT_EDIT_WATCHLIST_ITEM:
        let itemIdx = state.watchlist.findIndex(elem => elem.id === action.payload.id);
        return {...state, watchlist:[...state.watchlist.slice(0, itemIdx), action.payload ,...state.watchlist.slice(itemIdx+1)]}
    default:
      return state;
  }
};

export default userReducer;