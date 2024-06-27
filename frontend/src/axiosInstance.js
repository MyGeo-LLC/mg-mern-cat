import axios from 'axios';
import { notify } from './services/notificationService';

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:5000/api',
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      // Handle unauthorized errors by showing a notification message
      notify('Unauthorized, please log in', { variant: 'error' });
      // Redirect to login page or take other appropriate actions if needed
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
