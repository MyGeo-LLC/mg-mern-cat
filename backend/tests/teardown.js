require('dotenv').config({ path: './tests/.env' });
const { closeDB } = require('../utils/connectDB');

module.exports = async () => {
  await closeDB();
};
