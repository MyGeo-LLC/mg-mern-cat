// frontend/src/components/Footer.js

import { AppBar, Container, Link, Toolbar, Typography } from '@mui/material';

import React from 'react';

const Footer = () => {
  return (
    <AppBar position="static" color="primary" sx={{ top: 'auto', bottom: 0 }}>
      <Toolbar>
        <Container maxWidth="md" sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="body1" color="inherit">
            © 2024 MyGeo LLC. All rights reserved. Jeffrey Plewak
          </Typography>
          <Typography variant="body1" color="inherit">
            <Link href="/privacy-policy" color="inherit" underline="hover">
              Privacy Policy
            </Link>{' '}
            |{' '}
            <Link href="/terms-of-service" color="inherit" underline="hover">
              Terms of Service
            </Link>{' '}
            |{' '}
            <Link href="/about" color="inherit" underline="hover">
              Contact
            </Link>
          </Typography>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
