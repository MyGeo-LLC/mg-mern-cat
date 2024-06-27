import axiosInstance from './axiosInstance';

export const fetchRadioHeads = () => axiosInstance.get('/radioheads');
export const fetchProfile = () => axiosInstance.get('/users/profile');
export const updateProfile = (profileData) => axiosInstance.put('/users/profile', profileData);
export const login = (formData) => axiosInstance.post('/auth/login', formData);
export const register = (formData) => axiosInstance.post('/auth/register', formData);
