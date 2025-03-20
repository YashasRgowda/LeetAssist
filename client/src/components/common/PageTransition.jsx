import React from 'react';
import { motion } from 'framer-motion';

// This component can be used to create slide animations between login and register pages
// Usage: Wrap your component with this PageTransition component

const PageTransition = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;