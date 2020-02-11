import axios from 'axios';
import config from '../config';

class HttpService {
  constructor(options = {}) {
    this.client = axios.create(options);
    this.unauthorizedCallback = {};
    this.client.interceptors.response.use(this.handleSuccessResponse, this.handleErrorResponse);
    this.client.interceptors.request.use(request => this.requestHandler(request));

  }
  requestHandler = (request) => {
    
  
  return request
}
  attachHeaders(headers) {
    Object.assign(this.client.defaults.headers, headers);
  }

  removeHeaders(headerKeys) {
    headerKeys.forEach(key => delete this.client.defaults.headers[key]);
  }

  handleSuccessResponse(response) {
    return response;
  }
  
  handleErrorResponse = (error) => {
    const { status } = error.response;
    switch (status) {
      case 401: {
        this.unauthorizedCallback();
        break;
      }
      default:
        break;
    }
    return Promise.reject(error);
  }
  setAuthorizationHeader = () => {
    const token = this.getToken();
    if (token) {
      console.log(token);
      this.attachHeaders({
        Authorization: `Bearer ${token.access_token}`
      });
    }
  };
  getToken = () => {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user).access_token : undefined;
  };
  setUnauthorizedCallback(callback) {
    this.unauthorizedCallback = callback;
  }
}

const options = {
  baseURL: config.API_BASE_URL
};
const httpService = new HttpService(options);

export default httpService;
