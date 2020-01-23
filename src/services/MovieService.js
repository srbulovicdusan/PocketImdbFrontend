import ApiService from './ApiService';

const ENDPOINTS = {
  MOVIES: '/api/movies',
  MOVIES_COUNT: '/api/count/movies',
};

class MovieService extends ApiService {
  getMovies = () => {
    return this.apiClient.get(ENDPOINTS.MOVIES);
  };
  getMoviesByPage = payload => {
    return this.apiClient.get(ENDPOINTS.MOVIES + "?offset=" + payload.offset +"&take=" + payload.take);
  }
  getMoviesCount = () =>{
    return this.apiClient.get(ENDPOINTS.MOVIES_COUNT);
  }
}

export const movieService = new MovieService();
