import { Box, Button, Typography } from '@mui/material';

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';

const SplashScreen = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const handleLoginRedirect = () => {
    navigate('/login');
  };

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: 3,
      }}
    >
      <Typography variant="h1" gutterBottom>
        Welcome to MERN vrnet!
      </Typography>
      <Typography variant="h5" gutterBottom>
        Connect, Control, Communicate.
         Login Required
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={handleLoginRedirect}
        sx={{ mt: 3 }}
      >
        Get Started
      </Button>
    </Box>
  );
};

export default SplashScreen;
