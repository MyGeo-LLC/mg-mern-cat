const request = require('supertest');
const app = require('../server');
const { connectDB, closeDB } = require('../utils/connectDB');

beforeAll(async () => {
  await connectDB();
});

afterAll(async () => {
  await closeDB();
});

describe('User API', () => {
  it('should get all users', async () => {
    const res = await request(app)
      .get('/api/users')
      .set('Authorization', `Bearer validAdminToken`);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toBeInstanceOf(Array);
  });

  it('should not get users with invalid token', async () => {
    const res = await request(app)
      .get('/api/users')
      .set('Authorization', `Bearer invalidToken`);
    expect(res.statusCode).toEqual(401);
  });
});
