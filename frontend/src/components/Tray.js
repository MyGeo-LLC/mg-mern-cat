import { Box, Button } from '@mui/material';
import React, { useEffect } from 'react';
import { logPerformance } from '../utils/performanceLogger';

const Tray = ({ minimizedItems, onRestore }) => {
  useEffect(() => {
    logPerformance('Tray component mounted');
    return () => {
      logPerformance('Tray component unmounted');
    };
  }, []);

  return (
    <Box sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, backgroundColor: '#333', padding: 1 }}>
      {minimizedItems.map((id) => (
        <Button key={id} onClick={() => onRestore(id)} variant="contained" color="secondary">
          Restore {id}
        </Button>
      ))}
    </Box>
  );
};

export default Tray;
