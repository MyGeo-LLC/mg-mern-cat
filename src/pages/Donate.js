import React from 'react';
import { Container, Typography, Button } from '@material-ui/core';

const Donate = () => (
  <Container>
    <Typography variant="h4" component="h1" gutterBottom>Donate</Typography>
    <Typography variant="body1" gutterBottom>
      If you find this project useful, please consider making a donation to support its development.
    </Typography>
    <Button variant="contained" color="primary" href="https://www.paypal.com/donate">
      Donate with PayPal
    </Button>
  </Container>
);

export default Donate;
