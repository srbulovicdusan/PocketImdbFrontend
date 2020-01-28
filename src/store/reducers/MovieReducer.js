import { SET_MOVIES, SET_MOVIES_COUNT, SET_MOVIE, PUT_MOVIE_REACTION } from '../actions/ActionTypes';
import { bindActionCreators } from 'redux';

const initialState = {
  all: [],
  count : 0,
  selectedMovie:null,

};
const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MOVIES:
      return { ...state, all: action.payload };
    case SET_MOVIE:
      return {...state, selectedMovie: action.payload}
    case SET_MOVIES_COUNT:
      return {...state, count: action.payload};
    case PUT_MOVIE_REACTION:
      const movieIndex = state.all.findIndex((movie) => movie.id === action.payload.movie_id)
      const movie = state.all[movieIndex]      
      return {
        ...state,
        selectedMovie: state.selectedMovie ? {...state.selectedMovie, reactions : [...state.selectedMovie.reactions, action.payload]} : state.selectedMovie,
        all: [
          ...state.all.slice(0, movieIndex),
          {
            ...movie,
            reactions: [
              ...movie.reactions,
              action.payload
            ]
          },
          ...state.all.slice(movieIndex +1)
        ]  
      }

    default:
      return state;
  }
};

export default movieReducer;
