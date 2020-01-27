import { SET_MOVIES, SET_MOVIES_COUNT } from '../actions/ActionTypes';

const initialState = {
  all: [],
  count : 0,
};
const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MOVIES:
      return { ...state, all: action.payload };
    case SET_MOVIES_COUNT:
      return {...state, count: action.payload};
    default:
      return state;
  }
};

export default movieReducer;
