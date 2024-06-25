import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import React from 'react';
import { makeStyles } from '@mui/styles';
import { useAuth } from '../contexts/AuthContext';

const useStyles = makeStyles((theme) => ({
  header: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    flexGrow: 1,
  },
  button: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    borderRadius: '20px',
    marginLeft: theme.spacing(1),
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
    },
  },
}));

const Header = ({ toggleTheme }) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const location = useLocation();

  if (location.pathname === '/dashboard') return null;

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
        <Button onClick={toggleTheme} className={classes.button}>
          Toggle Theme
        </Button>
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
