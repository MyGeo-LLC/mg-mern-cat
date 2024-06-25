import React, { useState } from 'react';
import { Box, Typography, Button, IconButton } from '@mui/material';
import Close from '@mui/icons-material/Close';

const AudioPlayer = ({ minimized, onClose, onRestore, radioHeads }) => {
  const [selectedRadioHead, setSelectedRadioHead] = useState(null);

  const handleSelectRadioHead = (id) => {
    const radioHead = radioHeads.find((rh) => rh.id === id);
    setSelectedRadioHead(radioHead);
  };

  return (
    <Box sx={{ display: minimized ? 'none' : 'block', position: 'fixed', bottom: 0, width: '100%', backgroundColor: '#333', color: '#fff', p: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h6">Audio Player</Typography>
        <Box>
          <Button onClick={onRestore}>Restore</Button>
          <IconButton onClick={onClose}>
            <Close />
          </IconButton>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Typography variant="body1">Select Radio Head:</Typography>
        {radioHeads.map((radioHead) => (
          <Button key={radioHead.id} onClick={() => handleSelectRadioHead(radioHead.id)}>
            {radioHead.name} {selectedRadioHead && selectedRadioHead.id === radioHead.id ? '✔' : ''}
          </Button>
        ))}
      </Box>
      {selectedRadioHead && (
        <Box>
          <Typography variant="body2">Playing: {selectedRadioHead.name}</Typography>
          <audio controls>
            <source src={selectedRadioHead.settings.fileName} type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>
        </Box>
      )}
    </Box>
  );
};

export default AudioPlayer;
