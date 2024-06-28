import { SnackbarProvider as NotistackSnackbarProvider, useSnackbar as useNotistackSnackbar } from 'notistack';
import React, { createContext, useContext } from 'react';

const SnackbarContext = createContext();

export const useSnackbar = () => {
  return useContext(SnackbarContext);
};

export const SnackbarProvider = ({ children }) => {
  return (
    <NotistackSnackbarProvider maxSnack={3}>
      <InnerSnackbarProvider>{children}</InnerSnackbarProvider>
    </NotistackSnackbarProvider>
  );
};

const InnerSnackbarProvider = ({ children }) => {
  const notistack = useNotistackSnackbar();
  console.log("notistack:", notistack); // Debug line to check if notistack is defined

  return (
    <SnackbarContext.Provider value={notistack}>
      {children}
    </SnackbarContext.Provider>
  );
};
