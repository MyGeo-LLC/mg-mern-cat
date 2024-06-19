import { Container, Typography } from '@mui/material';

import React from 'react';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  aboutPage: {
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.primary,
    padding: theme.spacing(4),
    borderRadius: theme.spacing(2),
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
    margin: '32px auto',
    maxWidth: '800px',
  },
  header: {
    marginBottom: theme.spacing(2),
  },
  section: {
    marginTop: theme.spacing(4),
  },
}));

const About = () => {
  const classes = useStyles();
  return (
    <Container className={classes.aboutPage}>
      <Typography variant="h4" component="h1" className={classes.header}>
        About
      </Typography>
      <Typography variant="body1" gutterBottom>
        This application is designed to manage radio heads and widgets.
      </Typography>
      <Typography variant="h5" component="h2" className={classes.section}>
        User Manual
      </Typography>
      <Typography variant="body1">
        To use this application, first login. Then you can add, remove, or manage radio heads and widgets.
      </Typography>
    </Container>
  );
};

export default About;
