import { Button, Container, Typography } from '@mui/material';

import React from 'react';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  donatePage: {
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.primary,
    padding: theme.spacing(4),
    borderRadius: theme.spacing(2),
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
    margin: '32px auto',
    maxWidth: '800px',
    textAlign: 'center',
  },
  button: {
    marginTop: theme.spacing(2),
  },
}));

const Donate = () => {
  const classes = useStyles();
  return (
    <Container className={classes.donatePage}>
      <Typography variant="h4" component="h1" gutterBottom>
        Donate
      </Typography>
      <Typography variant="body1" gutterBottom>
        If you find this project useful, please consider making a donation to support its development.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        href="https://www.paypal.com/donate"
        className={classes.button}
      >
        Donate with PayPal
      </Button>
    </Container>
  );
};

export default Donate;
