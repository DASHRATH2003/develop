import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const location = useLocation();
  const token = localStorage.getItem('token');

  if (!token) {
    // Redirect to login if not authenticated
    return <Navigate to="/admin/login" state={{ from: location }} replace />;
  }

  return children;
};

export default ProtectedRoute; 