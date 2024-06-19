import { Button, Container, Typography } from '@mui/material';

import React from 'react';
import { makeStyles } from '@mui/styles';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  splashScreen: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: theme.palette.background.default,
    textAlign: 'center',
    color: theme.palette.text.primary,
  },
  button: {
    marginTop: theme.spacing(2),
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
    },
  },
}));

const SplashScreen = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/login');
  };

  return (
    <Container className={classes.splashScreen}>
      <Typography variant="h4" component="h1" gutterBottom>
        Welcome to the MERN Project
      </Typography>
      <Typography variant="body1">
        Please login or create a new account to continue.
      </Typography>
      <Button onClick={handleGetStarted} className={classes.button}>
        Let's Get Started
      </Button>
    </Container>
  );
};

export default SplashScreen;
