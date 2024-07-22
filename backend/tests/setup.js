const { connectDB } = require('../utils/connectDB');
const dotenv = require('dotenv');

dotenv.config({ path: './tests/.env' });

module.exports = async () => {
  await connectDB();
};
