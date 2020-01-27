import { SET_MOVIES, SET_MOVIES_COUNT, SET_MOVIE, SET_CURRENT_PAGE } from '../actions/ActionTypes';

const initialState = {
  all: [],
  count : 0,
  selectedMovie:null,
  currentPage: 0
};
const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MOVIES:
      return { ...state, all: action.payload };
    case SET_MOVIE:
      return {...state, selectedMovie: action.payload}
    case SET_MOVIES_COUNT:
      return {...state, count: action.payload};
    case SET_CURRENT_PAGE:
      return {...state, currentPage: action.payload}
    default:
      return state;
  }
};

export default movieReducer;
