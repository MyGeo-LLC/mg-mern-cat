import { AppBar, Button, Toolbar, Typography } from '@mui/material';

import React from 'react';
import { makeStyles } from '@mui/styles';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  header: {
    backgroundColor: theme.palette.primary.main,
  },
  title: {
    flexGrow: 1,
  },
  button: {
    color: theme.palette.common.white,
  },
}));

const Header = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login');
  };

  const handleDashboard = () => {
    navigate('/dashboard');
  };

  return (
    <AppBar position="static" className={classes.header}>
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          My App
        </Typography>
        <Button className={classes.button} onClick={handleDashboard}>Dashboard</Button>
        <Button className={classes.button} onClick={handleLogin}>Login</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
