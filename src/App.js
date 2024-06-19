import React, { useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { darkTheme, lightTheme } from './theme/theme';

import About from './pages/About';
import AdminPanel from './components/AdminPanel';
import AuthContextProvider from './contexts/AuthContext';
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
import { ThemeProvider } from '@material-ui/core/styles';
import UserProfile from './components/UserProfile';

const App = () => {
  const [theme, setTheme] = useState(darkTheme);

  const toggleTheme = () => {
    setTheme(theme === lightTheme ? darkTheme : lightTheme);
  };

  return (
    <ThemeProvider theme={theme}>
      <AuthContextProvider>
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
                  <button onClick={toggleTheme}>Mode</button>
              </ShortcutsContextProvider>
            </ProfilePreferencesContextProvider>
          </PermissionsContextProvider>
        </MessagesContextProvider>
      </AuthContextProvider>
    </ThemeProvider>
  );
};

export default App;
