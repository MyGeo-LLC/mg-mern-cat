import './Login.css';

import React, { useCallback, useEffect, useRef, useState } from 'react';

import API from '../api/axiosInstance';
import logger from '../utils/logger';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from '../contexts/SnackbarContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const { login } = useAuth();
  const isMounted = useRef(true);

  useEffect(() => {
    isMounted.current = true;

    return () => {
      isMounted.current = false;
    };
  }, []);

  const handleLogin = useCallback(async (e) => {
    e.preventDefault();
    setLoading(true);

    const controller = new AbortController();
    const signal = controller.signal;

    try {
      const response = await API.post('/auth/login', { email, password }, { signal });
      if (isMounted.current) {
        enqueueSnackbar('Login successful!', { variant: 'success' });
        localStorage.setItem('token', response.data.token);
        login({ name: 'John Doe' }); // Replace with actual user data
        logger.info("Login successful, navigating to /dashboard");
        navigate('/dashboard');
      }
    } catch (error) {
      if (signal.aborted) {
        logger.info('Login request was aborted');
      } else {
        logger.error("Login error:", error);
        if (isMounted.current) {
          enqueueSnackbar('Login failed. Please check your credentials and try again.', { variant: 'error' });
        }
      }
    } finally {
      if (isMounted.current) {
        setLoading(false);
      }
    }

    return () => {
      controller.abort();
    };
  }, [email, password, navigate, enqueueSnackbar, login]);

  return (
    <div className="login-container">
      <form onSubmit={handleLogin} className="login-form">
        <h2>Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>
    </div>
  );
};

export default Login;
