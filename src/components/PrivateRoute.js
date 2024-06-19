import { Navigate, Route } from 'react-router-dom';

import React from 'react';
import { useAuth } from '../contexts/AuthContext';

const PrivateRoute = ({ children, ...rest }) => {
  const { currentUser } = useAuth();

  return (
    <Route
      {...rest}
      render={({ location }) =>
        currentUser ? (
          children
        ) : (
          <Navigate to="/login" state={{ from: location }} />
        )
      }
    />
  );
};

export default PrivateRoute;
