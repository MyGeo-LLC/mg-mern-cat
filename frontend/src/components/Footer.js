import { AppBar, Toolbar, Typography } from '@mui/material';
import React from 'react';

const Footer = () => {
  return (
    <AppBar position="static" style={{ backgroundColor: '#1e1e1e', padding: '16px', textAlign: 'center', marginTop: 'auto' }}>
      <Toolbar>
        <Typography variant="body1" style={{ color: '#ffffff' }}>
          © 2024 My App. All rights reserved.
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
