import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://sparx-assignment.firebaseio.com/',
  });

  export default axiosInstance;
