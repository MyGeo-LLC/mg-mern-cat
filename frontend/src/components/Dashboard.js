import { Button, Container, Typography, Box } from '@mui/material';
import React, { useState, useEffect } from 'react';
import AudioSourceSelector from './AudioSourceSelector';
import DraggableWidget from './DraggableWidget';
import Radiohead from './Radiohead';
import Tray from './Tray';
import AudioPlayer from './AudioPlayer';
import { useSnackbar } from '../contexts/SnackbarContext';
import { useShortcutKeys } from '../contexts/ShortcutKeysContext';
import axios from 'axios';

const Dashboard = ({ user }) => {
  const [radioHeads, setRadioHeads] = useState([]);
  const [selectedRadioHeads, setSelectedRadioHeads] = useState([]);
  const [minimizedItems, setMinimizedItems] = useState([]);
  const [audioSource, setAudioSource] = useState("");
  const [audioPlayerMinimized, setAudioPlayerMinimized] = useState(true);
  const showSnackbar = useSnackbar();
  const { handleShortcut } = useShortcutKeys();

  useEffect(() => {
    const fetchRadioHeads = async () => {
      try {
        const response = await axios.get('/api/radioheads');
        setRadioHeads(response.data);
      } catch (error) {
        showSnackbar("Error fetching radio heads", "error");
      }
    };

    fetchRadioHeads();
  }, [showSnackbar]);

  const handleUpdateSettings = (id, newSettings) => {
    setRadioHeads((prevRadioHeads) =>
      prevRadioHeads.map((radioHead) =>
        radioHead.id === id ? { ...radioHead, settings: newSettings } : radioHead
      )
    );
  };

  const handleSettingsClick = (id) => {
    setSelectedRadioHeads((prevSelected) => {
      if (prevSelected.includes(id)) {
        return prevSelected.filter((selectedId) => selectedId !== id);
      } else {
        return [...prevSelected, id];
      }
    });
  };

  const handleSelectAudioSource = (source) => {
    setAudioSource(source);
  };

  const handleMinimize = (id) => {
    setMinimizedItems((prevItems) => [...prevItems, id]);
    setRadioHeads((prevRadioHeads) => prevRadioHeads.filter((radioHead) => radioHead.id !== id));
  };

  const handleRestore = (id) => {
    const restoredItem = minimizedItems.find((itemId) => itemId === id);
    setRadioHeads((prevRadioHeads) => [...prevRadioHeads, restoredItem]);
    setMinimizedItems((prevItems) => prevItems.filter((itemId) => itemId !== id));
  };

  useEffect(() => {
    // Set default audio source
    if (!audioSource && radioHeads.length > 0) {
      setAudioSource(radioHeads[0].settings.fileName);
    }
  }, [radioHeads, audioSource]);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Welcome {user.name} (Dashboard)
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        {radioHeads.map((radioHead) => (
          <Radiohead
            key={radioHead.id}
            {...radioHead}
            isSelected={selectedRadioHeads.includes(radioHead.id)}
            bringToFront={() => setSelectedRadioHeads([radioHead.id])}
            onUpdateSettings={(newSettings) => handleUpdateSettings(radioHead.id, newSettings)}
            onSettingsClick={() => handleSettingsClick(radioHead.id)}
            audioSource={audioSource}
          />
        ))}
      </Box>
      <AudioSourceSelector onSelect={handleSelectAudioSource} selectedSource={audioSource} />
      <Tray
        minimizedItems={minimizedItems}
        onRestore={handleRestore}
        onMinimize={handleMinimize}
      />
      <AudioPlayer
        minimized={audioPlayerMinimized}
        onClose={() => setAudioPlayerMinimized(true)}
        onRestore={() => setAudioPlayerMinimized(false)}
        radioHeads={radioHeads}
      />
    </Container>
  );
};

export default Dashboard;
