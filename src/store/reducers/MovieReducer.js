import { SET_MOVIES, SET_MOVIES_COUNT, SET_MOVIE } from '../actions/ActionTypes';

const initialState = {
  all: [],
  count : 0,
  selectedMovie:null,

};
const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MOVIES:
      console.log(action.payload);
      return { ...state, all: action.payload };
    case SET_MOVIE:
      return {...state, selectedMovie: action.payload}
    case SET_MOVIES_COUNT:
      return {...state, count: action.payload};
    default:
      return state;
  }
};

export default movieReducer;
