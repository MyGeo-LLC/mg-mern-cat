import { Box, Container, CssBaseline } from '@mui/material';

import Footer from './Footer';
import Header from './Header';
import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme';

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Container>
          {children}
        </Container>
      </Box>
      <Footer />
    </ThemeProvider>
  );
};

export default Layout;
