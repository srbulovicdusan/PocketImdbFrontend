import ApiService from './ApiService';

const ENDPOINTS = {
  MOVIES: '/api/movies',
  MOVIES_COUNT: '/api/count/movies',
  MOVIES_VISITS: 'api/visits/movie'
};

class MovieService extends ApiService {
  getMovies = () => {
    return this.apiClient.get(ENDPOINTS.MOVIES);
  };

  getMovieById = id =>{
    return this.apiClient.get(ENDPOINTS.MOVIES + "/" + id);
  }
  getMoviesByPage = payload => {
    return this.apiClient.get(ENDPOINTS.MOVIES + "?page=" + payload.page +"&perPage=" + payload.perPage);
  }
  getMoviesCount = () =>{
    return this.apiClient.get(ENDPOINTS.MOVIES_COUNT);
  }
  increaseMovieVisits = (payload) =>{
    return this.apiClient.put(ENDPOINTS.MOVIES_VISITS + "/" + payload.id);
  }
}
export const movieService = new MovieService();
