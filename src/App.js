import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import About from './pages/About';
import AdminPanel from './components/AdminPanel';
import AuthProvider from './contexts/AuthContext';
import Dashboard from './components/Dashboard';
import Donate from './pages/Donate';
import DraggableRadioHead from './components/DraggableRadioHead';
import DraggableWidget from './components/DraggableWidget';
import Footer from './components/Footer';
import Header from './components/Header';
import Login from './pages/Login';
import MessagesContextProvider from './contexts/MessagesContext';
import NotFound from './pages/NotFound';
import PermissionsContextProvider from './contexts/PermissionsContext';
import PrivateRoute from './components/PrivateRoute';
import Profile from './components/Profile';
import ProfilePreferencesContextProvider from './contexts/ProfilePreferencesContext';
import ShortcutsContextProvider from './contexts/ShortcutsContext';
import SplashScreen from './components/SplashScreen';
import { ThemeProvider } from '@mui/material/styles';
import UserProfile from './components/UserProfile';
import themes from './themes';

const App = () => {
  const [theme, setTheme] = useState(themes.darkTheme1);

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      if (prevTheme === themes.darkTheme1) return themes.lightTheme1;
      if (prevTheme === themes.lightTheme1) return themes.darkTheme2;
      if (prevTheme === themes.darkTheme2) return themes.lightTheme2;
      if (prevTheme === themes.lightTheme2) return themes.darkTheme3;
      if (prevTheme === themes.darkTheme3) return themes.lightTheme3;
      return themes.darkTheme1;
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <MessagesContextProvider>
          <PermissionsContextProvider>
            <ProfilePreferencesContextProvider>
              <ShortcutsContextProvider>
                <Header />
                <Routes>
                  <Route path="/" element={<SplashScreen />} />
                  <Route path="/login" element={<Login />} />
                  <Route
                    path="/dashboard"
                    element={
                      <PrivateRoute>
                        <Dashboard />
                      </PrivateRoute>
                    }
                  />
                  <Route
                    path="/admin"
                    element={
                      <PrivateRoute>
                        <AdminPanel />
                      </PrivateRoute>
                    }
                  />
                  <Route
                    path="/profile"
                    element={
                      <PrivateRoute>
                        <UserProfile />
                      </PrivateRoute>
                    }
                  />
                  <Route
                    path="/profile-settings"
                    element={
                      <PrivateRoute>
                        <Profile />
                      </PrivateRoute>
                    }
                  />
                  <Route path="/about" element={<About />} />
                  <Route path="/donate" element={<Donate />} />
                  <Route path="*" element={<NotFound />} />
                  <Route
                    path="/radiohead/:id"
                    element={
                      <PrivateRoute>
                        <DraggableRadioHead />
                      </PrivateRoute>
                    }
                  />
                  <Route
                    path="/widget/:id"
                    element={
                      <PrivateRoute>
                        <DraggableWidget />
                      </PrivateRoute>
                    }
                  />
                </Routes>
                <Footer />
                <button onClick={toggleTheme}>Toggle Theme</button>
              </ShortcutsContextProvider>
            </ProfilePreferencesContextProvider>
          </PermissionsContextProvider>
        </MessagesContextProvider>
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;
