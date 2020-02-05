import { call, put, take } from 'redux-saga/effects';
import { push, go, navigate } from 'connected-react-router';

import { genreService } from '../../services/GenreService';

import { setMovies, setMoviesCount, setMovie, putGenres, putSelectedGenre, deleteSelectedGenre } from '../actions/MovieActions';
import { GET_MOVIES_BY_PAGE } from '../actions/ActionTypes';


export function* getAllGenres(){
    try{
        const {data} = yield call(genreService.getGenres);
        yield put(putGenres(data));
    }catch(error){

    }
}