import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: '#1e1e1e',
    padding: theme.spacing(2),
    position: 'fixed',
    bottom: 0,
    width: '100%',
    textAlign: 'center',
  },
  text: {
    color: '#ffffff',
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.footer}>
      <Toolbar>
        <Typography variant="body1" className={classes.text}>
          © 2024 My App. All rights reserved.
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
