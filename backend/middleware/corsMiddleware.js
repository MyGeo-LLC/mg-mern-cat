const cors = require('cors');

const corsMiddleware = cors({
  origin: 'http://localhost:9000', // Adjust this to match your frontend's URL and port
  optionsSuccessStatus: 200,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  allowedHeaders: 'Content-Type, Authorization',
});

module.exports = corsMiddleware;
