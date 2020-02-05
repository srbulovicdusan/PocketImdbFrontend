
import { bindActionCreators } from 'redux';
import { PUT_POPULAR_MOVIES,SET_MOVIES, SET_MOVIES_COUNT, SET_MOVIE, PUT_COMMENTS, SET_CURRENT_PAGE, PUT_NEW_COMMENT,PUT_MOVIE_REACTION ,PUT_LOAD_MORE_COMMENTS} from '../actions/ActionTypes';

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
    comments: [],
    currentPage: 0,
    totalComments: 0,
    perPage:0,
  },


};
const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MOVIES:
      return { ...state, all: action.payload };
    case SET_MOVIE:
      return {...state, selectedMovie: {...state.selectedMovie, ...action.payload}}
    case SET_MOVIES_COUNT:
      return {...state, count: action.payload};
    case PUT_MOVIE_REACTION:
      const movieIndex = state.all.findIndex((movie) => movie.id === action.payload.movie_id)
      const movie = state.all[movieIndex]     
      const newSelectedMovie = state.selectedMovie && state.selectedMovie.id == action.payload.movie_id ? {...state.selectedMovie, reactions : [...state.selectedMovie.reactions, action.payload]} : state.selectedMovie
      return {
        ...state,
        selectedMovie: newSelectedMovie,
            
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

    case SET_CURRENT_PAGE:
      return {...state, currentPage: action.payload}
    case PUT_COMMENTS:
      return {...state, 
              selectedMovie: 
                  {...state.selectedMovie, 
                    comments: [...action.payload.comments], 
                    totalComments: action.payload.total,
                    currentPage: action.payload.currentPage,
                    perPage: action.payload.perPage}
              }
    case PUT_LOAD_MORE_COMMENTS:
      //Proverava da li vec postoji jer moze da se desi da korisnik prvo postavi nov komentar
      //pa onda klikne load more comments sto moze da dovuce iz baze isti komentar
      let commentsToPut = action.payload.comments.filter(
        comment=> {
          for(let com of state.selectedMovie.comments){
            if (com.id == comment.id){
              return false;
            }
          }
          return true
      });
      return {...state, 
        selectedMovie: 
            {...state.selectedMovie, 
              comments: [...state.selectedMovie.comments, ...commentsToPut], 
              totalComments: action.payload.total,
              currentPage: action.payload.currentPage,
              perPage: action.payload.perPage}
        }
    case PUT_NEW_COMMENT:
      return {...state, selectedMovie: {...state.selectedMovie, comments: [...state.selectedMovie.comments, action.payload], totalComments: state.selectedMovie.totalComments + 1}}
    case PUT_POPULAR_MOVIES:
      return {...state, popularMovies:[...action.payload]}
    default:
      return state;
  }
};

export default movieReducer;
