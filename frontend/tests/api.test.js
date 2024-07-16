import axios from 'axios';
import API, { fetchRadioHeads, fetchProfile, updateProfile, login, register } from '../src/api';

jest.mock('axios');

describe('API Methods', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should fetch radio heads', async () => {
    const data = [{ id: 1, name: 'Radiohead 1' }];
    axios.get.mockResolvedValue({ data });

    const response = await fetchRadioHeads();
    expect(response.data).toEqual(data);
    expect(axios.get).toHaveBeenCalledWith('/radioheads', undefined);
  });

  it('should fetch user profile', async () => {
    const data = { id: 1, name: 'User' };
    axios.get.mockResolvedValue({ data });

    const response = await fetchProfile();
    expect(response.data).toEqual(data);
    expect(axios.get).toHaveBeenCalledWith('/users/profile', undefined);
  });

  it('should update user profile', async () => {
    const profileData = { name: 'Updated User' };
    const data = { success: true };
    axios.put.mockResolvedValue({ data });

    const response = await updateProfile(profileData);
    expect(response.data).toEqual(data);
    expect(axios.put).toHaveBeenCalledWith('/users/profile', profileData, undefined);
  });

  it('should login user', async () => {
    const formData = { email: 'test@example.com', password: 'password' };
    const data = { token: 'test-token' };
    axios.post.mockResolvedValue({ data });

    const response = await login(formData);
    expect(response.data).toEqual(data);
    expect(axios.post).toHaveBeenCalledWith('/auth/login', formData, undefined);
  });

  it('should register user', async () => {
    const formData = { email: 'test@example.com', password: 'password' };
    const data = { success: true };
    axios.post.mockResolvedValue({ data });

    const response = await register(formData);
    expect(response.data).toEqual(data);
    expect(axios.post).toHaveBeenCalledWith('/auth/register', formData, undefined);
  });
});
