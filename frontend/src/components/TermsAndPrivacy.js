import { Box, Button, Container, Tab, Tabs, Typography } from '@mui/material';
import React, { useState } from 'react';

import axios from 'axios';
import { useAuth } from '../contexts/AuthContext';
import { useSnackbar } from '../contexts/SnackbarContext';

const TermsAndPrivacy = () => {
  const [activeTab, setActiveTab] = useState(0);
  const { user } = useAuth();
  const showSnackbar = useSnackbar();

  const handleChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const handleAcknowledge = async () => {
    try {
      await axios.post('/api/acknowledgment/acknowledge', {
        termsAccepted: true,
        privacyAccepted: true,
      });
      showSnackbar('Acknowledgment recorded', 'success');
    } catch (error) {
      showSnackbar('Failed to record acknowledgment', 'error');
    }
  };

  return (
    <Container>
      <Box sx={{ p: 4, backgroundColor: '#1e1e1e', borderRadius: '8px', mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          Terms of Service and Privacy Policy
        </Typography>
        <Tabs value={activeTab} onChange={handleChange}>
          <Tab label="Terms of Service" />
          <Tab label="Privacy Policy" />
        </Tabs>
        <TabPanel value={activeTab} index={0}>
          <Typography variant="body1">
 
</Typography>
        </TabPanel>
        <Button variant="contained" color="primary" onClick={handleAcknowledge} sx={{ mt: 2 }}>
          Acknowledge
        </Button>
      </Box>
    </Container>
  );
};

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;
  return (
    <div role="tabpanel" hidden={value !== index} {...other}>
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
};

export default TermsAndPrivacy;
