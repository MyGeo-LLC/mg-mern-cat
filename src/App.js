import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import Login from './pages/Login';
import AdminPanel from './admin/AdminPanel';

import { AuthProvider } from './contexts/AuthContext';
import { PermissionsProvider } from './contexts/PermissionsContext';
import { ShortcutsProvider } from './contexts/ShortcutsContext';
import { MessagesProvider } from './contexts/MessagesContext';
import { ProfilePreferencesProvider } from './contexts/ProfilePreferencesContext';

const App = () => {
  return (
    <AuthProvider>
      <PermissionsProvider>
        <ShortcutsProvider>
          <MessagesProvider>
            <ProfilePreferencesProvider>
              <Router>
                <Switch>
                  <Route path="/login" component={Login} />
                  <Route path="/admin" component={AdminPanel} />
                  <Route path="/profile" component={Profile} />
                  <Route path="/" component={Dashboard} />
                </Switch>
              </Router>
            </ProfilePreferencesProvider>
          </MessagesProvider>
        </ShortcutsProvider>
      </PermissionsProvider>
    </AuthProvider>
  );
};

export default App;
