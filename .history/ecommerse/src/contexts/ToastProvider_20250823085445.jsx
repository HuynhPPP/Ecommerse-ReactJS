import { Children, createContext, useState } from 'react';
  import React from 'react';

  import { ToastContainer, toast } from 'react-toastify';

export const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
  

  const value = { 

   };

  return (
    <ToastContext.Provider value={value}>
      {children}
    </ToastContext.Provider>
  );
};
