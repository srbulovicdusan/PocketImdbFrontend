import { PUT_GENRES, PUT_SELECTED_GENRE, DELETE_SELECTED_GENRE} from '../actions/ActionTypes';

const initialState = {
  genres: [],
  selectedGenres:[]

};
const genreReducer = (state = initialState, action) => {
  switch (action.type) {
    case PUT_GENRES:
      return { ...state, genres: [...state.genres, ...action.payload]};
    case PUT_SELECTED_GENRE:
      return {...state, selectedGenres: [...state.selectedGenres, action.payload]}
    case DELETE_SELECTED_GENRE:
        let genreIndex = state.selectedGenres.findIndex(genreId => genreId == action.payload);
        return {...state, selectedGenres: [...state.selectedGenres.splice(0, genreIndex), ...state.selectedGenres.splice(genreIndex+1)]}
    default:
      return state;
  }
};

export default genreReducer;