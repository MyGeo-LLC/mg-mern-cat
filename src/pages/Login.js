import './Login.css';

import { Button, Container, TextField, Typography } from '@material-ui/core';
import React, { useContext, useState } from 'react';

import { AuthContext } from '../contexts/AuthContext';

function Login() {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <Container maxWidth="xs" className="container">
      <Typography variant="h4" component="h1" gutterBottom>Login</Typography>
      <form onSubmit={handleSubmit}>
        <TextField label="Email" fullWidth margin="normal" value={email} onChange={(e) => setEmail(e.target.value)} />
        <TextField label="Password" type="password" fullWidth margin="normal" value={password} onChange={(e) => setPassword(e.target.value)} />
        <Button type="submit" variant="contained" color="primary" fullWidth>Login</Button>
      </form>
    </Container>
  );
}

export default Login;
