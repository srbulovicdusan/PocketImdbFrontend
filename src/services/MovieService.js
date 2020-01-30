import ApiService from './ApiService';

const ENDPOINTS = {
  MOVIES: '/api/movies',
  MOVIES_COUNT: '/api/count/movies',
  SEARCH_MOVIES: '/api/search/movies',
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
    let genresFilter = payload.genreFilter ? "&genreFilter=" + payload.genreFilter.join(',') : "";
    return this.apiClient.get(ENDPOINTS.MOVIES + "?page=" + payload.page +"&perPage=" + payload.perPage + genresFilter);
  }
  getMoviesCount = () =>{
    return this.apiClient.get(ENDPOINTS.MOVIES_COUNT);
  }
  searchMovie = searchParam =>{
    return this.apiClient.get(ENDPOINTS.SEARCH_MOVIES + "/" + searchParam);
  }
  increaseMovieVisits = (payload) =>{
    return this.apiClient.put(ENDPOINTS.MOVIES_VISITS + "/" + payload.id);
  }
}
export const movieService = new MovieService();
