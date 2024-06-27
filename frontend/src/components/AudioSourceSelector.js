import { Box, Container, FormControl, InputLabel, MenuItem, Select, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useMessages } from "../contexts/MessagesContext";

const AudioSourceSelector = ({ onSelectAudioSource }) => {
  const [audioSources, setAudioSources] = useState([]);
  const [selectedSource, setSelectedSource] = useState("");
  const { showMessage } = useMessages();

  useEffect(() => {
    const getAudioSources = async () => {
      try {
        const devices = await navigator.mediaDevices.enumerateDevices();
        const audioInputDevices = devices.filter(device => device.kind === "audioinput");
        setAudioSources(audioInputDevices);
      } catch (error) {
        showMessage("Error fetching audio sources", "error");
      }
    };

    getAudioSources();
  }, [showMessage]);

  const handleChange = (event) => {
    setSelectedSource(event.target.value);
    onSelectAudioSource(event.target.value);
  };

  return (
    <Container>
      <Typography variant="h6" gutterBottom>Audio Source Selector</Typography>
      <FormControl fullWidth>
        <InputLabel id="audio-source-label">Audio Source</InputLabel>
        <Select labelId="audio-source-label" value={selectedSource} onChange={handleChange}>
          {audioSources.map((source) => (
            <MenuItem key={source.deviceId} value={source.deviceId}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                {source.label || "Unknown Source"}
                {selectedSource === source.deviceId && (
                  <CheckCircleIcon sx={{ color: 'green', marginLeft: 1 }} />
                )}
              </Box>
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Container>
  );
};

export default AudioSourceSelector;
