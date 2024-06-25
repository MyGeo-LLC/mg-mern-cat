import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from './pages/About';
import AdminPanel from './pages/AdminPanel';
import Dashboard from './components/Dashboard';
import ErrorBoundary from './components/ErrorBoundary';
import Footer from './components/Footer';
import Header from './components/Header';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import SecureRoute from './components/SecureRoute';
import SplashScreen from './components/SplashScreen';

const App = () => {
  return (
    <ErrorBoundary>
      <Header />
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<SecureRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </ErrorBoundary>
  );
};

export default App;
