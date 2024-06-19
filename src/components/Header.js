import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h6" className="title">
        MERN Project
      </Typography>
      <Button color="inherit" component={Link} to="/">Home</Button>
      <Button color="inherit" component={Link} to="/about">About</Button>
      <Button color="inherit" component={Link} to="/login">Login</Button>
    </Toolbar>
  </AppBar>
);

export default Header;
