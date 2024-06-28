const logger = {
  info: (message, ...args) => {
    console.log(`INFO: ${message}`, ...args);
  },
  error: (message, ...args) => {
    console.error(`ERROR: ${message}`, ...args);
  },
};

export default logger;
