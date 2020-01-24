import { SET_MOVIES, SET_MOVIE } from '../actions/ActionTypes';

const initialState = {
  all: [],
  selectedMovie: null,
};
const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MOVIES:
      return { ...state, all: action.payload };
    case SET_MOVIE:
      return {...state, selectedMovie: action.payload}
    default:
      return state;
  }
};

export default movieReducer;
