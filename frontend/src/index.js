import './styles.css';

import App from './App';
import { AuthProvider } from './contexts/AuthContext';
import ErrorBoundary from './components/ErrorBoundary';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { SnackbarProvider } from './contexts/SnackbarContext';

ReactDOM.render(
  <AuthProvider>
    <SnackbarProvider>
      <Router>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </Router>
    </SnackbarProvider>
  </AuthProvider>,
  document.getElementById('root')
);
