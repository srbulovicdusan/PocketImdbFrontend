import ApiService from './ApiService';

const ENDPOINTS = {
  COMMENTS: '/api/comments',
};

class CommentService extends ApiService {
    constructor() {
        super();
        this.setAuthorizationHeader();
      }
  getAllByMovie = (payload) =>{
    return this.apiClient.get(ENDPOINTS.COMMENTS + "/" + payload.movie_id);
  }
  postComment = (payload) => {
      return this.apiClient.post(ENDPOINTS.COMMENTS, payload);
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
}
export const commentService = new CommentService();