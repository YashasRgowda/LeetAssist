import React, { useState } from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Login from '../../pages/Login';
import Register from '../../pages/Register';
import { useAuth } from '../../context/AuthContext';

// Add this component to your app to wrap the Login and Register components
// with smooth animations between them

const AuthFlow = () => {
  const location = useLocation();
  const { isAuthenticated } = useAuth();
  
  // Redirect to /solve if already authenticated
  if (isAuthenticated) {
    return <Navigate to="/solve" />;
  }
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AuthFlow;