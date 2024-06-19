import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import React, { useContext } from 'react';

import { AuthContext } from '../contexts/AuthContext';
import { makeStyles } from '@mui/styles';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  header: {
    backgroundColor: '#1e1e1e',
  },
  title: {
    flexGrow: 1,
  },
  button: {
    backgroundColor: '#ffffff',
    color: '#000000',
    borderRadius: '20px',
    marginLeft: theme.spacing(1),
    '&:hover': {
      backgroundColor: '#f0f0f0',
    },
  },
  icon: {
    marginRight: theme.spacing(2),
  },
}));

const Header = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const { user, logout } = useContext(AuthContext);

  const handleLogin = () => {
    navigate('/login');
  };

  const handleDashboard = () => {
    navigate('/dashboard');
  };

  const handleAbout = () => {
    navigate('/about');
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <AppBar position="static" className={classes.header}>
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          My App
        </Typography>
        {user ? (
          <>
            <Button className={classes.button} onClick={handleDashboard}>
              Dashboard
            </Button>
            <Button className={classes.button} onClick={handleAbout}>
              Help
            </Button>
            <Button className={classes.button} onClick={handleLogout}>
              Logout
            </Button>
          </>
        ) : (
          <>
            <Button className={classes.button} onClick={handleAbout}>
              About
            </Button>
            <Button className={classes.button} onClick={handleLogin}>
              Login
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
