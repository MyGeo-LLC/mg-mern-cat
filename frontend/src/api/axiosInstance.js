import axios from 'axios';
import { notify } from '../services/notificationService';
import { useNavigate } from 'react-router-dom';

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:5000/api',
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          // Handle unauthorized errors by showing a notification message
          notify('Unauthorized, please log in', { variant: 'error' });
          // Optionally, redirect to login page or take other appropriate actions
          window.location.href = '/login'; // This can be adapted for your router setup
          break;
        case 403:
          notify('Forbidden access', { variant: 'error' });
          break;
        case 500:
          notify('Internal server error', { variant: 'error' });
          break;
        default:
          notify(`Error: ${error.response.status}`, { variant: 'error' });
      }
    } else if (error.request) {
      // The request was made but no response was received
      notify('Network error, please try again', { variant: 'error' });
    } else {
      // Something happened in setting up the request that triggered an Error
      notify(`Error: ${error.message}`, { variant: 'error' });
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
