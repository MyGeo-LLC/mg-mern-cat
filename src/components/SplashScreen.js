import { Container, Typography } from '@mui/material';

import React from 'react';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  splashScreen: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: theme.palette.background.default,
    textAlign: 'center',
  },
}));

const SplashScreen = () => {
  const classes = useStyles();
  return (
    <Container className={classes.splashScreen}>
      <Typography variant="h4" component="h1" gutterBottom>
        Welcome to the MERN Project
      </Typography>
      <Typography variant="body1">
        Please login or create a new account to continue.
      </Typography>
    </Container>
  );
};

export default SplashScreen;
