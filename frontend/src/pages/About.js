import { Box, Container, Typography } from '@mui/material';

import Layout from '../components/Layout';
import React from 'react';

const About = () => {
  return (
    <>
      <Container maxWidth="md">
        <Typography variant="h4" component="h1" gutterBottom>
          About Us
        </Typography>
        <Typography variant="body1">
          This is the about page content.
        </Typography>
      </Container>
    </>
  );
};

export default About;
