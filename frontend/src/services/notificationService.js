let enqueueSnackbarRef;

export const setEnqueueSnackbar = (enqueueSnackbar) => {
  enqueueSnackbarRef = enqueueSnackbar;
};

export const notify = (message, options) => {
  if (enqueueSnackbarRef) {
    enqueueSnackbarRef(message, options);
  }
};
