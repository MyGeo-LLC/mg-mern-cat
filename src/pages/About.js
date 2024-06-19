import React from 'react';
import { Container, Typography } from '@material-ui/core';

const About = () => (
  <Container>
    <Typography variant="h4" component="h1" gutterBottom>About</Typography>
    <Typography variant="body1" gutterBottom>
      This application is designed to manage radio heads and widgets.
    </Typography>
    <Typography variant="h5" component="h2" gutterBottom>User Manual</Typography>
    <Typography variant="body1">
      To use this application, first login. Then you can add, remove, or manage radio heads and widgets.
    </Typography>
  </Container>
);

export default About;
