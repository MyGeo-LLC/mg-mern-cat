// frontend/src/pages/Login.js

import { Box, Button, CircularProgress, Container, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

import { useAuth } from '../contexts/AuthContext';
import { useSnackbar } from '../contexts/SnackbarContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const showSnackbar = useSnackbar();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await login(email, password);
    } catch (error) {
      showSnackbar('Login failed', 'error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <Box sx={{ p: 4, backgroundColor: '#1e1e1e', borderRadius: '8px', mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          Login
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            sx={{ mt: 2 }}
            required
            InputLabelProps={{ style: { color: '#ffffff' } }}
            InputProps={{ style: { color: '#ffffff' } }}
          />
          <TextField
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
            sx={{ mt: 2 }}
            required
            InputLabelProps={{ style: { color: '#ffffff' } }}
            InputProps={{ style: { color: '#ffffff' } }}
          />
          <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
            {loading ? <CircularProgress size={24} /> : 'Login'}
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default Login;
