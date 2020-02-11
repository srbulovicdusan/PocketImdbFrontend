import ApiService from './ApiService';

const ENDPOINTS = {
  MOVIES: '/api/movies',
  MOVIES_OMDB: '/api/omdb/movies',

  MOVIES_COUNT: '/api/count/movies',

  REACTIONS: '/api/reactions',

  SEARCH_MOVIES: '/api/search/movies',
  MOVIES_VISITS: 'api/visits/movie',
  POPULAR_MOVIES: 'api/popular/movies',
  WATCHLIST: 'api/watchlist',
};

class MovieService extends ApiService {
  constructor() {
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
    let genresFilter = payload.genreFilter && payload.genreFilter.length >0 ? "&genreFilter=" + payload.genreFilter.join(',') : "";
    return this.apiClient.get(ENDPOINTS.MOVIES + "?page=" + payload.page +"&perPage=" + payload.perPage + genresFilter);
  }
  getMoviesCount = () =>{
    return this.apiClient.get(ENDPOINTS.MOVIES_COUNT);
  }
  postMovieReaction = (payload) =>{
    return this.apiClient.post(ENDPOINTS.REACTIONS, payload);
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
    return user ? JSON.parse(user).access_token : undefined;
  };
  searchMovie = searchParam =>{
    return this.apiClient.get(ENDPOINTS.SEARCH_MOVIES + "?queryParam=" + searchParam);
  }
  increaseMovieVisits = (payload) =>{
    return this.apiClient.put(ENDPOINTS.MOVIES_VISITS + "/" + payload.id);
  }
  postMovie = (payload) =>{
    return this.apiClient.post(ENDPOINTS.MOVIES, payload);
  }
  postMovieOmdb = (payload) =>{
    return this.apiClient.post(ENDPOINTS.MOVIES, payload);
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
    return user ? JSON.parse(user).access_token : undefined;
  };
  getRelatedMovies = (payload) =>{
    return this.apiClient.get(ENDPOINTS.MOVIES + "/" + payload.id + "/related?numOfMovies=" + payload.numOfMovies);
  }
  getPopularMovies = (numOfMovies) =>{
    return this.apiClient.get(ENDPOINTS.POPULAR_MOVIES + "?numOfMovies=" + numOfMovies);
  }
  postMovie = (payload) =>{
    let formData = new FormData();
    formData.append('image', payload.image);
    formData.append('title', payload.title);
    formData.append('genre', payload.genre);
    formData.append('description', payload.description);
    return this.apiClient.post(ENDPOINTS.MOVIES, formData);
  }

  
}
export const movieService = new MovieService();
