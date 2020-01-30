import { SET_MOVIES, SET_MOVIES_COUNT, SET_MOVIE, PUT_COMMENTS, SET_CURRENT_PAGE, PUT_NEW_COMMENT } from '../actions/ActionTypes';

const initialState = {
  all: [],
  count : 0,
  currentPage: 0,
  selectedMovie:{
    id: "",
    title:"",
    description:"",
    image_url:"",
    reactions: [],
    comments: []
  },


};
const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MOVIES:
      console.log(action.payload);
      return { ...state, all: action.payload };
    case SET_MOVIE:
      return {...state, selectedMovie: {...state.selectedMovie, ...action.payload}}
    case SET_MOVIES_COUNT:
      return {...state, count: action.payload};
    case SET_CURRENT_PAGE:
      return {...state, currentPage: action.payload}
    case PUT_COMMENTS:
      return {...state, selectedMovie: {...state.selectedMovie, comments: [...action.payload]}}
    case PUT_NEW_COMMENT:
      return {...state, selectedMovie: {...state.selectedMovie, comments: [...state.selectedMovie.comments, action.payload]}}
    default:
      return state;
  }
};

export default movieReducer;
