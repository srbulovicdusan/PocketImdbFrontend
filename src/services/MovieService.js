import ApiService from './ApiService';

const ENDPOINTS = {
  MOVIES: '/api/movies',
  MOVIES_OMDB: '/api/omdb/movies',

  MOVIES_COUNT: '/api/count/movies',
  SEARCH_MOVIES: '/api/search/movies',
  MOVIES_VISITS: 'api/visits/movie'
};

class MovieService extends ApiService {
  constructor(){
    super();
    this.setAuthorizationHeader();
  }
  getMovies = () => {
    return this.apiClient.get(ENDPOINTS.MOVIES);
  };

  getMovieById = id =>{
    return this.apiClient.get(ENDPOINTS.MOVIES + "/" + id);
  }
  getMoviesByPage = payload => {
    console.log(payload.genreFilter);
    let genresFilter = payload.genreFilter && payload.genreFilter.length >0 ? "&genreFilter=" + payload.genreFilter.join(',') : "";
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
  postMovie = (payload) =>{
    return this.apiClient.post(ENDPOINTS.MOVIES, payload);
  }
  postMovieOmdb = (payload) =>{
    //this.setAuthorizationHeader()
    return this.apiClient.post(ENDPOINTS.MOVIES_OMDB, payload);
  }
  setAuthorizationHeader = () => {
    const token = this.getToken();
    if (token) {
      this.api.attachHeaders({
        Authorization: `Bearer ${token}`
      });
    }
  };
  getToken = () => {
    const user = localStorage.getItem('user');
    user && console.log(JSON.parse(user).access_token);
    return user ? JSON.parse(user).access_token : undefined;
  };
}
export const movieService = new MovieService();
