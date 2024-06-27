import { Box, Button } from '@mui/material';
import React from 'react';

const Tray = ({ minimizedItems, onRestore }) => {
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
