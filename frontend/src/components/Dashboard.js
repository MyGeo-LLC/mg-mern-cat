import React, { useEffect, useState } from 'react';
import { Box, Container, Typography } from '@mui/material';
import { logPerformance } from '../utils/performanceLogger';
import AudioPlayer from '../components/AudioPlayer';
import AudioSourceSelector from '../components/AudioSourceSelector';
import Radiohead from '../components/Radiohead';
import Tray from '../components/Tray';
import axios from 'axios';
import { useShortcutKeys } from '../contexts/ShortcutsContext';
import { useSnackbar } from '../contexts/SnackbarContext';

const Dashboard = ({ user }) => {
  const [radioHeads, setRadioHeads] = useState([]);
  const [selectedRadioHeads, setSelectedRadioHeads] = useState([]);
  const [minimizedItems, setMinimizedItems] = useState([]);
  const [audioSource, setAudioSource] = useState("");
  const [audioPlayerMinimized, setAudioPlayerMinimized] = useState(true);
  const showSnackbar = useSnackbar();
  const { handleShortcut } = useShortcutKeys();

  useEffect(() => {
    logPerformance('Dashboard component mounted');
    return () => {
      logPerformance('Dashboard component unmounted');
    };
  }, []);

  useEffect(() => {
    const fetchRadioHeads = async () => {
      try {
        const response = await axios.get('/api/radioheads');
        setRadioHeads(response.data);
        logPerformance('Fetched radio heads');
      } catch (error) {
        showSnackbar("Error fetching radio heads", "error");
        logPerformance('Error fetching radio heads');
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
    logPerformance(`Updated settings for radio head ${id}`);
  };

  const handleSettingsClick = (id) => {
    setSelectedRadioHeads((prevSelected) => {
      if (prevSelected.includes(id)) {
        return prevSelected.filter((selectedId) => selectedId !== id);
      } else {
        return [...prevSelected, id];
      }
    });
    logPerformance(`Settings clicked for radio head ${id}`);
  };

  const handleSelectAudioSource = (source) => {
    setAudioSource(source);
    logPerformance(`Audio source selected: ${source}`);
  };

  const handleMinimize = (id) => {
    setMinimizedItems((prevItems) => [...prevItems, id]);
    setRadioHeads((prevRadioHeads) => prevRadioHeads.filter((radioHead) => radioHead.id !== id));
    logPerformance(`Radio head minimized: ${id}`);
  };

  const handleRestore = (id) => {
    const restoredItem = minimizedItems.find((itemId) => itemId === id);
    setRadioHeads((prevRadioHeads) => [...prevRadioHeads, restoredItem]);
    setMinimizedItems((prevItems) => prevItems.filter((itemId) => itemId !== id));
    logPerformance(`Radio head restored: ${id}`);
  };

  useEffect(() => {
    // Set default audio source
    if (!audioSource && radioHeads.length > 0) {
      setAudioSource(radioHeads[0].settings.fileName);
      logPerformance(`Default audio source set: ${radioHeads[0].settings.fileName}`);
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
