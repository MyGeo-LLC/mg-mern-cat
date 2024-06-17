import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { AuthProvider } from './contexts/AuthContext';
import { PermissionsProvider } from './contexts/PermissionsContext';
import { ShortcutsProvider } from './contexts/ShortcutsContext';
import { MessagesProvider } from './contexts/MessagesContext';
import { ProfilePreferencesProvider } from './contexts/ProfilePreferencesContext';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import Login from './pages/Login';
import AdminPanel from './admin/AdminPanel';
import store from './store';
import './App.css';  // Custom styles

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <AuthProvider>
          <PermissionsProvider>
            <ShortcutsProvider>
              <MessagesProvider>
                <ProfilePreferencesProvider>
                  <Switch>
                    <Route path="/login" component={Login} />
                    <Route path="/admin" component={AdminPanel} />
                    <Route path="/profile" component={Profile} />
                    <Route path="/" component={Dashboard} />
                  </Switch>
                </ProfilePreferencesProvider>
              </MessagesProvider>
            </ShortcutsProvider>
          </PermissionsProvider>
        </AuthProvider>
      </Router>
    </Provider>
  );
};

export default App;
