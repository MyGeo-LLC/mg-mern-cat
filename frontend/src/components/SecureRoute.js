import { Navigate, Outlet } from 'react-router-dom';

import React from 'react';
import { useAuth } from '../contexts/AuthContext';

const SecureRoute = () => {
  const { user } = useAuth();
  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default SecureRoute;
