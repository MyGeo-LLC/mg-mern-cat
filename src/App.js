import { Route, Routes } from 'react-router-dom';

import AdminPanel from './components/AdminPanel';
import AuthContextProvider from './contexts/AuthContext';
import Dashboard from './components/Dashboard';
import DraggableRadioHead from './components/DraggableRadioHead';
import DraggableWidget from './components/DraggableWidget';
import Login from './pages/Login';
import MessagesContextProvider from './contexts/MessagesContext';
import PermissionsContextProvider from './contexts/PermissionsContext';
import Profile from './components/Profile';
import ProfilePreferencesContextProvider from './contexts/ProfilePreferencesContext';
import { Provider } from 'react-redux';
import React from 'react';
import ShortcutsContextProvider from './contexts/ShortcutsContext';
import UserProfile from './components/UserProfile';
import store from './redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <AuthContextProvider>
        <MessagesContextProvider>
          <PermissionsContextProvider>
            <ProfilePreferencesContextProvider>
              <ShortcutsContextProvider>
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/admin" element={<AdminPanel />} />
                  <Route path="/profile" element={<UserProfile />} />
                  <Route path="/profile-settings" element={<Profile />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/radiohead/:id" element={<DraggableRadioHead />} />
                  <Route path="/widget/:id" element={<DraggableWidget />} />
                </Routes>
              </ShortcutsContextProvider>
            </ProfilePreferencesContextProvider>
          </PermissionsContextProvider>
        </MessagesContextProvider>
      </AuthContextProvider>
    </Provider>
  );
};

export default App;
