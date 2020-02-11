import ApiService from './ApiService';

const ENDPOINTS = {
  MOVIES: '/api/movies',
  MOVIES_COUNT: '/api/count/movies',
  SEARCH_MOVIES: '/api/search/movies',
  MOVIES_VISITS: 'api/visits/movie',
  WATCHLIST: 'api/watchlist',
};

class UserService extends ApiService {
    constructor() {
        super();
        this.setAuthorizationHeader();
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
    getWatchList = () =>{
        this.setAuthorizationHeader();
        return this.apiClient.get(ENDPOINTS.WATCHLIST);
    }
    addToWatchlist = (payload) =>{
        return this.apiClient.post(ENDPOINTS.WATCHLIST, payload);
    }
    removeFromWatchlist = (payload) =>{
      return this.apiClient.delete(ENDPOINTS.WATCHLIST + "/" + payload.id);
    }
    editWatchlistItem = (payload) =>{
      return this.apiClient.put(ENDPOINTS.WATCHLIST, payload);
    }
}
export const userService = new UserService();
