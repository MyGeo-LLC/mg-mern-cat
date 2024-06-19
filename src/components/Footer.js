import React from 'react';
import { Container, Typography } from '@material-ui/core';
import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <Container>
      <Typography variant="body1">© 2023 MERN Project. All rights reserved.</Typography>
    </Container>
  </footer>
);

export default Footer;
