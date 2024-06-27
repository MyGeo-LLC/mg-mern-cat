import { SnackbarProvider as NotistackProvider, useSnackbar as useNotistackSnackbar } from 'notistack';
import React, { createContext, useContext, useEffect } from 'react';

import { setEnqueueSnackbar } from '../services/notificationService';

const SnackbarContext = createContext();

export const SnackbarProvider = ({ children }) => {
  const { enqueueSnackbar } = useNotistackSnackbar();

  useEffect(() => {
    setEnqueueSnackbar(enqueueSnackbar);
  }, [enqueueSnackbar]);

  return (
    <SnackbarContext.Provider value={{ enqueueSnackbar }}>
      {children}
    </SnackbarContext.Provider>
  );
};

export const useSnackbar = () => {
  return useContext(SnackbarContext);
};

const ProviderWrapper = ({ children }) => (
  <NotistackProvider maxSnack={3}>
    <SnackbarProvider>{children}</SnackbarProvider>
  </NotistackProvider>
);

export default ProviderWrapper;
