import { Navigate, Outlet } from 'react-router-dom';

import React from 'react';
import { useAuth } from '../contexts/AuthContext';

const SecureRoute = ({ requiredRole }) => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" />;
  }

  if (requiredRole && user.role !== requiredRole) {
    return <Navigate to="/dashboard" />;
  }

  return <Outlet />;
};

export default SecureRoute;
