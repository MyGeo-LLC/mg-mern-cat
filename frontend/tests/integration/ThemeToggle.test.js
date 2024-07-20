import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from '../App';
import { ThemeProvider } from '../contexts/ThemeProvider';

describe('Theme Toggle', () => {
  it('should toggle theme mode', () => {
    render(
      <Router>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </Router>
    );

    expect(screen.getByText('light')).toBeInTheDocument();
    fireEvent.click(screen.getByText('Toggle Theme'));
    expect(screen.getByText('dark')).toBeInTheDocument();
  });
});
