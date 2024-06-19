import { Button, Container, TextField, Typography } from '@mui/material';
import React, { useContext, useState } from 'react';

import { AuthContext } from '../contexts/AuthContext';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

const dynamicStyle = (props) => css`
  color: ${props.color};
`;

const LoginPage = styled(Container)`
  background-color: #1e1e1e;
  color: #ffffff;
  padding: 32px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  margin: 32px auto;
  max-width: 400px;
  text-align: center;
`;

const StyledButton = styled(Button)`
  background-color: #e82127;
  margin-top: 16px;
  &:hover {
    background-color: #c51e22;
  }
`;

const StyledTextField = styled(TextField)`
  margin: 8px 0;
  width: 100%;
`;

const Login = () => {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (login(email, password)) {
      navigate('/dashboard');
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <LoginPage>
      <Typography variant="h4" component="h1" gutterBottom>Login</Typography>
      {error && <Typography color="error">{error}</Typography>}
      <form onSubmit={handleSubmit}>
        <StyledTextField
          label="Email"
          type="email"
          variant="outlined"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <StyledTextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <StyledButton type="submit" variant="contained" color="primary" fullWidth>
          Login
        </StyledButton>
      </form>
    </LoginPage>
  );
}

export default Login;
