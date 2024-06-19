import { Container, Typography } from '@mui/material';

import React from 'react';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  notFoundPage: {
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.primary,
    padding: theme.spacing(4),
    borderRadius: theme.spacing(2),
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
    margin: '32px auto',
    maxWidth: '600px',
    textAlign: 'center',
  },
  header: {
    marginBottom: theme.spacing(2),
  },
}));

const NotFound = () => {
  const classes = useStyles();
  return (
    <Container className={classes.notFoundPage}>
      <Typography variant="h4" component="h1" className={classes.header}>
        404 - Page Not Found
      </Typography>
      <Typography variant="body1">
        The page you are looking for does not exist.
      </Typography>
    </Container>
  );
};

export default NotFound;
