// frontend/src/pages/About.js

import { Box, Button, Container, Snackbar, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

import emailjs from 'emailjs-com';

const About = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send('service_id', 'template_id', formData, 'user_id')
      .then(() => {
        setSnackbarOpen(true);
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });
  };

  return (
    <Container>
      <Box sx={{ p: 4 }}>
        <Typography variant="h4" gutterBottom>Contact & Support</Typography>
        <Typography variant="body1" gutterBottom>
          For any support requests, bug fixes, or feature requests, please fill out the form below.
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            fullWidth
            sx={{ mt: 2 }}
            required
          />
          <TextField
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            fullWidth
            sx={{ mt: 2 }}
            required
          />
          <TextField
            label="Message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            fullWidth
            multiline
            rows={4}
            sx={{ mt: 2 }}
            required
          />
          <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
            Submit
          </Button>
        </form>
        <Snackbar
          open={snackbarOpen}
          autoHideDuration={6000}
          onClose={() => setSnackbarOpen(false)}
          message="Request submitted successfully!"
        />
      </Box>
    </Container>
  );
};

export default About;
