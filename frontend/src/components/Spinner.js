import { Box, CircularProgress, Typography } from '@mui/material';

import React from 'react';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  spinnerContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f5f5f5',
  },
  message: {
    marginTop: theme.spacing(2),
  },
}));

const Spinner = ({ message }) => {
  const classes = useStyles();

  return (
    <Box className={classes.spinnerContainer}>
      <CircularProgress size={60} />
      <Typography variant="h6" className={classes.message}>
        {message}
      </Typography>
    </Box>
  );
};

export default Spinner;
