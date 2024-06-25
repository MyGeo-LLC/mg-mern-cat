const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('./models/User');
require('dotenv').config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};

const createUsers = async () => {
  const users = [
    { name: 'Operator User', email: 'operator@example.com', password: 'password1', role: 'operator' },
    { name: 'Admin User', email: 'admin@example.com', password: 'password1', role: 'admin' },
    { name: 'Superuser', email: 'superuser@example.com', password: 'password1', role: 'superuser' },
    { name: 'Test User', email: 'test@example.com', password: 'password1', role: 'test' },
  ];

  for (const user of users) {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(user.password, salt);
    user.password = hashedPassword;
    await User.create(user);
  }

  console.log('Users created:');
  users.forEach(user => console.log(`Email: ${user.email}, Password: password1, Role: ${user.role}`));
};

const run = async () => {
  await connectDB();
  await createUsers();
  mongoose.connection.close();
};

run();
