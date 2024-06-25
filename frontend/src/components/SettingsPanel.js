import { Box, Button, Container, Slider, Tab, Tabs, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

const SettingsPanel = ({ settings, onSave }) => {
  const [incomingVolume, setIncomingVolume] = useState(settings.incomingVolume || 50);
  const [outgoingVolume, setOutgoingVolume] = useState(settings.outgoingVolume || 50);
  const [masterVolume, setMasterVolume] = useState(settings.masterVolume || 50);
  const [backgroundColor, setBackgroundColor] = useState(settings.backgroundColor || '#292929');
  const [activeTab, setActiveTab] = useState(0);

  const handleSave = () => {
    const newSettings = {
      incomingVolume,
      outgoingVolume,
      masterVolume,
      backgroundColor,
    };
    onSave(newSettings);
  };

  return (
    <Container>
      <Tabs value={activeTab} onChange={(e, newValue) => setActiveTab(newValue)} aria-label="settings tabs">
        <Tab label="General" />
        <Tab label="Appearance" />
      </Tabs>
      {activeTab === 0 && (
        <Box>
          <Typography>Incoming Volume</Typography>
          <Slider value={incomingVolume} onChange={(e, val) => setIncomingVolume(val)} />
          <Typography>Outgoing Volume</Typography>
          <Slider value={outgoingVolume} onChange={(e, val) => setOutgoingVolume(val)} />
          <Typography>Master Volume</Typography>
          <Slider value={masterVolume} onChange={(e, val) => setMasterVolume(val)} />
          <TextField
            label="Background Color"
            type="color"
            value={backgroundColor}
            onChange={(e) => setBackgroundColor(e.target.value)}
            fullWidth
          />
          <Button variant="contained" onClick={handleSave} sx={{ mt: 2 }}>
            Save Settings
          </Button>
        </Box>
      )}
      {activeTab === 1 && (
        <Box>
          <Typography>Appearance</Typography>
          <TextField
            label="Background Color"
            type="color"
            value={backgroundColor}
            onChange={(e) => setBackgroundColor(e.target.value)}
            fullWidth
          />
          <Button variant="contained" onClick={handleSave} sx={{ mt: 2 }}>
            Save Appearance
          </Button>
        </Box>
      )}
    </Container>
  );
};

export default SettingsPanel;
