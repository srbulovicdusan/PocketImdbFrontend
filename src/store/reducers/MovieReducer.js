import { SET_MOVIES, SET_MOVIES_COUNT, SET_MOVIE, PUT_COMMENTS, SET_CURRENT_PAGE, PUT_NEW_COMMENT,PUT_LOAD_MORE_COMMENTS } from '../actions/ActionTypes';

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
    default:
      return state;
  }
};

export default movieReducer;
