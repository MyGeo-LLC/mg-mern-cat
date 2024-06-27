import { Box, Typography } from '@mui/material';

import React from 'react';

const Footer = () => {
  return (
    <Box component="footer" sx={{ p: 2, bgcolor: 'background.paper', textAlign: 'center' }}>
      <Typography variant="body2" color="textSecondary">
        &copy; 2024 My Application. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
