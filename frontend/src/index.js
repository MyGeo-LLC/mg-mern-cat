import './styles/global.css'; // Import global styles

import App from './App';
import { AuthProvider } from './contexts/AuthContext';
import { MessagesProvider } from './contexts/MessagesContext';
import { ProfilePreferencesProvider } from './contexts/ProfilePreferencesContext';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import ShortcutsProvider from './contexts/ShortcutsContext';
import SnackbarProvider from './contexts/SnackbarContext';
import { ThemeProvider } from './contexts/ThemeProvider';
import store from './redux/store';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <AuthProvider>
        <ThemeProvider>
          <MessagesProvider>
            <ProfilePreferencesProvider>
              <ShortcutsProvider>
                <SnackbarProvider>
                  <App />
                </SnackbarProvider>
              </ShortcutsProvider>
            </ProfilePreferencesProvider>
          </MessagesProvider>
        </ThemeProvider>
      </AuthProvider>
    </Router>
  </Provider>,
  document.getElementById('root')
);
