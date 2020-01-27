import ApiService from './ApiService';

const ENDPOINTS = {
  MOVIES: '/api/movies',
  MOVIES_COUNT: '/api/count/movies',
};

class MovieService extends ApiService {
  getMovies = () => {
    return this.apiClient.get(ENDPOINTS.MOVIES);
  };

  getMovieById = id =>{
    return this.apiClient.get(ENDPOINTS.MOVIES + "/" + id);

  getMoviesByPage = payload => {
    return this.apiClient.get(ENDPOINTS.MOVIES + "?page=" + payload.page +"&perPage=" + payload.perPage);
  }
  getMoviesCount = () =>{
    return this.apiClient.get(ENDPOINTS.MOVIES_COUNT);
  }
}
export const movieService = new MovieService();
