import { Box, Button, Dialog, DialogContent, Typography } from '@mui/material';
import React from 'react';
import { makeStyles } from '@mui/styles';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  splashScreen: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: theme.palette.background.default,
  },
  dialogContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(4),
    backgroundColor: theme.palette.background.paper,
    borderRadius: 8,
    textAlign: 'center',
  },
  button: {
    marginTop: theme.spacing(2),
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
    },
  },
}));

const SplashScreen = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const handleStart = () => {
    navigate('/login');
  };

  return (
    <Dialog open={true} onClose={handleStart}>
      <DialogContent className={classes.dialogContent}>
        <Typography variant="h4" gutterBottom>
          Welcome to the Dashboard
        </Typography>
        <Typography variant="body1">
          Click "I'm Ready" to proceed to the login page.
        </Typography>
        <Button onClick={handleStart} className={classes.button}>
          I'm Ready
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default SplashScreen;
