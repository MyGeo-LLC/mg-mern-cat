/** @jsxImportSource @emotion/react */
import { Card, CardContent, Typography, IconButton, Slider, Modal, Box } from '@mui/material';
import { Settings } from '@mui/icons-material';
import { useState } from 'react';
import { css } from '@emotion/react';
import Draggable from 'react-draggable';
import { ResizableBox } from 'react-resizable';
import SettingsPanel from './SettingsPanel';

const draggableRadioHeadStyle = css`
  background-color: #1e1e1e;
  color: #ffffff;
  border: 2px solid transparent;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  padding: 16px;
  margin: 16px 0;
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
  cursor: grab;
  position: relative;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
    border-color: #0d47a1;
  }

  &:active {
    cursor: grabbing;
  }

  .settings-icon {
    position: absolute;
    top: 16px;
    right: 16px;
    color: #e82127;
    transition: color 0.3s ease;

    &:hover {
      color: #c51e22;
    }
  }
`;

const modalStyle = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  background-color: #fff;
  border: 2px solid #000;
  box-shadow: 24px;
  padding: 16px;
`;

const DraggableRadioHead = ({ id, name }) => {
  const [settings, setSettings] = useState({
    incomingVolume: 50,
    outgoingVolume: 50,
    masterVolume: 50,
    filename: `audio_recording_${id}.mp3`,
    color: '#1e1e1e',
  });
  const [isMuted, setIsMuted] = useState(false);
  const [open, setOpen] = useState(false);

  const handleVolumeChange = (event, newValue) => {
    setSettings((prevSettings) => ({
      ...prevSettings,
      masterVolume: newValue,
    }));
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSettingsChange = (name, value) => {
    setSettings((prevSettings) => ({
      ...prevSettings,
      [name]: value,
    }));
  };

  const handleSave = () => {
    handleClose();
  };

  return (
    <Draggable>
      <ResizableBox width={300} height={200} minConstraints={[200, 100]} maxConstraints={[600, 400]}>
        <Card css={draggableRadioHeadStyle} style={{ backgroundColor: settings.color }}>
          <CardContent>
            <Typography variant="h6">{name}</Typography>
            <Slider
              value={settings.masterVolume}
              onChange={handleVolumeChange}
              aria-labelledby="continuous-slider"
              min={0}
              max={100}
            />
            <Typography variant="body2">{isMuted ? 'Muted' : `Volume: ${settings.masterVolume}`}</Typography>
            <IconButton className="settings-icon" onClick={handleOpen}>
              <Settings />
            </IconButton>
          </CardContent>
          <Modal open={open} onClose={handleClose}>
            <Box css={modalStyle}>
              <SettingsPanel
                settings={settings}
                handleSettingsChange={handleSettingsChange}
                handleSave={handleSave}
              />
            </Box>
          </Modal>
        </Card>
      </ResizableBox>
    </Draggable>
  );
};

export default DraggableRadioHead;
