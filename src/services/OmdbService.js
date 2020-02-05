import axios from 'axios';

const ENDPOINTS = {

};

class OmdbService {
    constructor(options = {}) {
        this.client = axios.create(options);
        this.client.interceptors.response.use(this.handleSuccessResponse, this.handleErrorResponse);
        this.client.interceptors.request.use(request => this.requestHandler(request));
        this.unauthorizedCallback = () => {};
      }
       requestHandler = (request) => {
          delete request.headers['Authorization'];
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
    
      handleErrorResponse(error) {
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
    
      setUnauthorizedCallback(callback) {
        this.unauthorizedCallback = callback;
      }
    
    
    
    findMovie = (payload) => {
        
        //this.removeHeaders(['Authorization']);
        return this.client.get("?apikey=5eead556&t=" + payload.title + "&y=" + payload.year + "plot=full")//, headers);
    }

}
const options = {
    baseURL: "http://www.omdbapi.com"
  };
export const omdbService = new OmdbService(options);
