const logPerformance = (metric) => {
    console.log('Performance metric:', metric);
  };
  
  const logError = (error) => {
    console.error('Error:', error);
  };
  
  module.exports = {
    logPerformance,
    logError,
  };
  