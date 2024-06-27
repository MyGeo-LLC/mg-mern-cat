import React from 'react';
import { Container, Typography } from '@mui/material';

const NotFound = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>404 Not Found</Typography>
      <Typography variant="body1">
        The page you are looking for does not exist.
      </Typography>
    </Container>
  );
};

export default NotFound;
