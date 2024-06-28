import { Navigate, Outlet } from 'react-router-dom';

import React from 'react';
import { useAuth } from '../contexts/AuthContext';

const SecureRoute = ({ children, ...rest }) => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" />;
  }

  return children ? React.cloneElement(children, rest) : <Outlet />;
};

export default SecureRoute;
