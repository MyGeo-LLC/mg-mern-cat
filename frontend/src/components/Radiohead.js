import './Radiohead.css';

import { Box, IconButton, Slider, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

import Settings from '@mui/icons-material/Settings';

const Radiohead = ({ id, name, settings, onUpdateSettings, onSettingsClick, isSelected, bringToFront, audioSource }) => {
  const [incomingAudio, setIncomingAudio] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIncomingAudio(Math.random() < 0.5);
    }, Math.floor(Math.random() * 25000) + 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      id={id}
      className={isSelected ? 'selected' : ''}
      onClick={bringToFront}
      style={{ border: isSelected ? '2px solid blue' : 'none', backgroundColor: settings.color }}
    >
      <Typography variant="h6">{name} (Radiohead)</Typography>
      <Typography variant="body2">Status: <span style={{ color: 'green' }}>Online</span></Typography>
      <Box>
        <Typography>Incoming Volume</Typography>
        <Slider value={settings.incomingVolume} onChange={(e, newValue) => onUpdateSettings({ ...settings, incomingVolume: newValue })} />
        <Typography>Outgoing Volume</Typography>
        <Slider value={settings.outgoingVolume} onChange={(e, newValue) => onUpdateSettings({ ...settings, outgoingVolume: newValue })} />
        <Typography>Master Volume</Typography>
        <Slider value={settings.masterVolume} onChange={(e, newValue) => onUpdateSettings({ ...settings, masterVolume: newValue })} />
      </Box>
      <IconButton onClick={onSettingsClick}>
        <Settings />
      </IconButton>
      {incomingAudio && <div className="incoming-audio-indicator">Incoming Audio</div>}
      <audio id={id} controls>
        <source src={audioSource} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default Radiohead;
