const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('./models/User'); // Adjust the path as necessary
const dotenv = require('dotenv');

dotenv.config(); // Load environment variables from .env file

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(async () => {
  console.log('MongoDB connected');

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash('password1', salt);

  const user = new User({
    name: 'Test User',
    email: 'test@test.com',
    password: hashedPassword,
  });

  await user.save();
  console.log('Test user created');

  mongoose.disconnect();
}).catch(err => {
  console.error('Error connecting to MongoDB:', err);
});

