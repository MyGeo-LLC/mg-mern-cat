import './Footer.css';

import { AppBar, Toolbar, Typography } from '@material-ui/core';

import React from 'react';

const Footer = () => (
  <AppBar position="static" className="footer">
    <Toolbar>
      <Typography variant="body1" className="footer-text">
        © 2024 My App. All rights reserved.
      </Typography>
    </Toolbar>
  </AppBar>
);

export default Footer;
