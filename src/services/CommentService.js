import ApiService from './ApiService';

const ENDPOINTS = {
  COMMENTS: '/api/comments',

};

class CommentService extends ApiService {
    constructor() {
        super();
      }

  getAllByMovie = (payload) =>{
    return this.apiClient.get("api/movie" + "/" + payload.id + "/comments?page=" + payload.page + "&perPage=" + payload.perPage);
  }
  postComment = (payload) => {
      return this.apiClient.post(ENDPOINTS.COMMENTS, payload);
  }
}
export const commentService = new CommentService();