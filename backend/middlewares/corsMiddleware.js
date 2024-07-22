// const cors = require('cors');

// const corsOptions = {
//   origin: '*', // Adjust the origin as necessary
//   methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
//   preflightContinue: false,
//   optionsSuccessStatus: 204,
// };

// module.exports = cors(corsOptions);
const cors = require('cors');

const corsMiddleware = cors({
  origin: '*', // Allow all origins
  optionsSuccessStatus: 200,
});

module.exports = corsMiddleware;
