const request = require('supertest');
const app = require('../server');
const { connectDB, closeDB } = require('../utils/connectDB');

beforeAll(async () => {
  await connectDB();
});

afterAll(async () => {
  await closeDB();
});

describe('Auth API', () => {
  it('should login a user', async () => {
    const res = await request(app)
      .post('/api/auth/login')
      .send({ email: 'test@test.com', password: 'password1' });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('token');
  });

  it('should not login a user with invalid credentials', async () => {
    const res = await request(app)
      .post('/api/auth/login')
      .send({ email: 'invalid@test.com', password: 'invalidpassword' });
    expect(res.statusCode).toEqual(401);
  });
});
