
import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  // Dummy authentication check.
  // For now, we'll assume the user is logged in if they aren't going to /login.
  const isAuthenticated = sessionStorage.getItem('isAuthenticated');

  if (!isAuthenticated) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to so we can send them there after they login.
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
