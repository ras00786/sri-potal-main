import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ToastComponent = () => {
  return (
    <ToastContainer
      position="top-right" // You can customize the position: top-right, bottom-right, etc.
      autoClose={3000}     // Auto close after 3 seconds
      hideProgressBar={false} // Show progress bar
      newestOnTop={false}  // Newest toast on top
      closeOnClick
      rtl={false}          // Right-to-left layout
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"        // You can use 'dark' for dark theme
    />
  );
};

export default ToastComponent;
