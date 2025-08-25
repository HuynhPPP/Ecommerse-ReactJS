import { Children, createContext, useState } from 'react';

export const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
  

  const value = { isOpen, setIsOpen, type, setType };

  return (
    <ToastContext.Provider value={value}>
      {children}
    </ToastContext.Provider>
  );
};
