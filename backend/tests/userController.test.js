const request = require('supertest');
const app = require('../server');
const User = require('../models/User');

describe('User API', () => {
  // @test   Fetch all users
  // @requirement   RQ-001: System must allow admin to fetch all users
  it('should fetch all users', async () => {
    const res = await request(app)
      .get('/api/users')
      .set('Authorization', `Bearer ${adminToken}`);

    expect(res.status).toBe(200);
    expect(res.body).toBeInstanceOf(Array);
  });

  // Additional tests with similar traceability comments...
});
