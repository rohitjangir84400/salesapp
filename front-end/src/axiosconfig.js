import axios from 'axios';

// Set the base URL if your server is on a different domain
axios.defaults.baseURL = 'http://localhost:5000';

// Include credentials (cookies) with cross-origin requests
axios.defaults.withCredentials = true;

export default axios;