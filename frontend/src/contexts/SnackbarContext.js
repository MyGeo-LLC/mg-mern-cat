import { SnackbarProvider as NotistackSnackbarProvider, useSnackbar as notistackUseSnackbar } from 'notistack';
import React, { createContext, useContext } from 'react';

const SnackbarContext = createContext();

export const useSnackbar = () => useContext(SnackbarContext);

export const SnackbarProvider = ({ children }) => {
  const { enqueueSnackbar } = notistackUseSnackbar();

  const showSnackbar = (message, variant) => {
    enqueueSnackbar(message, { variant });
  };

  return (
    <SnackbarContext.Provider value={showSnackbar}>
      <NotistackSnackbarProvider maxSnack={3}>
        {children}
      </NotistackSnackbarProvider>
    </SnackbarContext.Provider>
  );
};
