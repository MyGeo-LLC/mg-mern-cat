import React from 'react';
import { Container, Typography } from '@material-ui/core';
import './SplashScreen.css';

const SplashScreen = () => (
  <Container className="splash-screen">
    <Typography variant="h4" component="h1" gutterBottom>
      Welcome to the MERN Project
    </Typography>
    <Typography variant="body1">
      Please login or create a new account to continue.
    </Typography>
  </Container>
);

export default SplashScreen;
