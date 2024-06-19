import { Box, Button, Container, Typography } from '@mui/material';
import React, { useContext } from 'react';

import { AuthContext } from '../contexts/AuthContext';
import DraggableWidget from './DraggableWidget';
import RadioHead from './RadioHead';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  dashboard: {
    backgroundColor: '#1e1e1e',
    color: '#ffffff',
    padding: theme.spacing(4),
    borderRadius: 8,
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
    margin: theme.spacing(4, 0),
    maxWidth: '1000px',
    animation: '$fadeIn 0.5s ease-in-out',
  },
  button: {
    backgroundColor: '#e82127',
    '&:hover': {
      backgroundColor: '#c51e22',
    },
  },
  '@keyframes fadeIn': {
    '0%': {
      opacity: 0,
      transform: 'translateY(-10px)',
    },
    '100%': {
      opacity: 1,
      transform: 'translateY(0)',
    },
  },
}));

const Dashboard = () => {
  const classes = useStyles();
  const { logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
  };

  return (
    <Container className={classes.dashboard}>
      <Typography variant="h4">Dashboard</Typography>
      <Button variant="contained" onClick={handleLogout} className={classes.button}>
        Logout
      </Button>
      {[1, 2, 3, 4, 5].map((id) => (
        <DraggableWidget key={id} id={`radiohead-${id}`} title={`RadioHead ${id}`}>
          <RadioHead
            id={id}
            name={`RadioHead ${id}`}
            status="active"
            onPushToTalk={() => console.log('Push to talk')}
            onMute={() => console.log('Mute')}
          />
        </DraggableWidget>
      ))}
    </Container>
  );
};

export default Dashboard;
