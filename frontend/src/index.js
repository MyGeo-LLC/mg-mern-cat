import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { AuthProvider } from './contexts/AuthContext';
import { MessagesProvider } from './contexts/MessagesContext';
import { ProfilePreferencesProvider } from './contexts/ProfilePreferencesContext';
import ShortcutsProvider from './contexts/ShortcutsContext';
import { ThemeProvider } from './contexts/ThemeProvider';
import { SnackbarProvider } from './contexts/SnackbarContext';
import store from './redux/store';
import './styles.css';

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
