const request = require('supertest');
const app = require('../server');
const User = require('../models/User');
const { connectDB, closeDB } = require('../config/db');

describe('Auth API', () => {
  beforeAll(async () => {
    await connectDB();
    // Create a test user
    await request(app).post('/api/users').send({
      name: 'Test User',
      email: 'test@example.com',
      password: 'password123',
      role: 'user',
    });
  });

  afterAll(async () => {
    await closeDB();
  });

  it('should authenticate a user and return a token', async () => {
    const res = await request(app)
      .post('/api/auth/login')
      .send({
        email: 'test@example.com',
        password: 'password123',
      });

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('token');
  });

  it('should not authenticate with wrong credentials', async () => {
    const res = await request(app)
      .post('/api/auth/login')
      .send({
        email: 'wrong@example.com',
        password: 'wrongpassword',
      });

    expect(res.statusCode).toEqual(401);
    expect(res.body).toHaveProperty('message', 'Invalid email or password');
  });
});
