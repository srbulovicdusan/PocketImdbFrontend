import { LOGIN_ERROR, REGISTER_ERROR , ADD_MOVIE_ERROR} from '../actions/ActionTypes';

const initialState = {
  loginError: false,
  registerError: false,
  addMovieError: {
    title : "",
    description : "",
    image_url: "",
    genre_id: ""
  }
};

const errorReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_ERROR:
      return { ...state, loginError: action.payload };
    case REGISTER_ERROR:
      return { ...state, registerError: action.payload };
    case ADD_MOVIE_ERROR:
      return {...state, addMovieError: {...state, ...action.payload}}
    default:
      return state;
  }
};

export default errorReducer;
