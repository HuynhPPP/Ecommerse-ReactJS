import { Children, createContext, useState } from 'react';

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
