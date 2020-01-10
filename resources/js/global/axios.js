  
import axios from 'axios'
let http = axios.create({
    baseURL: 'http://localhost:3000/api/'
  });

  http.defaults.headers.common['Accept'] = 'application/json';
 // http.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');

export default http;