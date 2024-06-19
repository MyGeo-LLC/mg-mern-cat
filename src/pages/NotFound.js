import "./NotFound.ss"

import { Container, Typography } from '@material-ui/core';

import React from 'react';
const NotFound = () => (
  <Container>
    <Typography variant="h4" component="h1" gutterBottom>
      404 - Page Not Found
    </Typography>
    <Typography variant="body1">
      The page you are looking for does not exist.
    </Typography>
  </Container>
);

export default NotFound;
