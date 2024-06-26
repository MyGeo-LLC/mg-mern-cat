const cors = require('cors');

const corsMiddleware = cors({
  origin: 'http://localhost:3000', // Adjust this to match your frontend's URL and port TODO
  optionsSuccessStatus: 200,
});

module.exports = corsMiddleware;
