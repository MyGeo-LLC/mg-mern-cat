import React, { useState } from 'react';
import { Card, CardContent, Typography, Button, IconButton, Modal, Box } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import { makeStyles } from '@mui/styles';
import AudioIndicator from './AudioIndicator';
import SettingsPanel from './SettingsPanel';

const useStyles = makeStyles((theme) => ({
  radioHead: {
    backgroundColor: '#292929',
    color: '#ffffff',
    borderRadius: 8,
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
    padding: theme.spacing(2),
    margin: theme.spacing(2, 0),
    transition: 'transform 0.3s, box-shadow 0.3s',
    '&:hover': {
      transform: 'translateY(-5px)',
      boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)',
    },
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    marginTop: theme.spacing(2),
    backgroundColor: '#e82127',
    '&:hover': {
      backgroundColor: '#c51e22',
    },
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    borderRadius: 8,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(4),
    outline: 'none',
  },
}));

const RadioHead = ({ id, name, status, onPushToTalk, onMute }) => {
  const classes = useStyles();
  const [isMuted, setIsMuted] = useState(false);
  const [open, setOpen] = useState(false);

  const handleMuteToggle = () => {
    setIsMuted(!isMuted);
    onMute(id, !isMuted);
  };

  const handleSettingsOpen = () => {
    setOpen(true);
  };

  const handleSettingsClose = () => {
    setOpen(false);
  };

  return (
    <Card className={classes.radioHead}>
      <CardContent>
        <div className={classes.header}>
          <Typography variant="h6">{name}</Typography>
          <IconButton onClick={handleSettingsOpen}>
            <SettingsIcon style={{ color: '#ffffff' }} />
          </IconButton>
        </div>
        <Typography variant="body1">Status: {status}</Typography>
        <AudioIndicator type="incoming" active={status === 'active'} />
        <AudioIndicator type="outgoing" active={status === 'active'} />
        <Button variant="contained" color="primary" onClick={onPushToTalk} className={classes.button}>
          Push to Talk
        </Button>
        <Button variant="contained" color={isMuted ? 'secondary' : 'default'} onClick={handleMuteToggle} className={classes.button}>
          {isMuted ? 'Unmute' : 'Mute'}
        </Button>
      </CardContent>
      <Modal
        open={open}
        onClose={handleSettingsClose}
        className={classes.modal}
        aria-labelledby="settings-modal-title"
        aria-describedby="settings-modal-description"
      >
        <Box className={classes.paper}>
          <SettingsPanel onClose={handleSettingsClose} />
        </Box>
      </Modal>
    </Card>
  );
};

export default RadioHead;
