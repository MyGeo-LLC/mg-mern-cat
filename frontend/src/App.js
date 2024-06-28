import { Box, CircularProgress } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import About from './pages/About';
import Admin from './pages/Admin';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';
import Header from './components/Header';
import Login from './pages/Login';
import { MessagesProvider } from './contexts/MessagesContext';
import NotFound from './pages/NotFound';
import { ProfilePreferencesProvider } from './contexts/ProfilePreferencesContext';
import SecureRoute from './components/SecureRoute';
import ShortcutsProvider from './contexts/ShortcutsContext';
import SplashScreen from './components/SplashScreen';
import TermsAndPrivacy from './pages/TermsAndPrivacy';
import ThemeProvider from './contexts/ThemeProvider';
import { useAuth } from './contexts/AuthContext';

const App = () => {
  const { logout, user } = useAuth();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <ThemeProvider>
      <MessagesProvider>
        <ProfilePreferencesProvider>
          <ShortcutsProvider>
            <Header />
            {user && <button onClick={logout} style={{ margin: '10px' }}>Logout</button>}
            <Routes>
              <Route path="/" element={<SplashScreen />} />
              <Route path="/login" element={<Login />} />
              <Route path="/about" element={<About />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/terms-and-privacy" element={<TermsAndPrivacy />} />
              <Route path="/dashboard" element={<SecureRoute><Dashboard /></SecureRoute>} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
          </ShortcutsProvider>
        </ProfilePreferencesProvider>
      </MessagesProvider>
    </ThemeProvider>
  );
};

export default App;
