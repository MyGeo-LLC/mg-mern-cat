const request = require('supertest');
const app = require('../server');
const RadioHead = require('../models/RadioHead');

describe('RadioHead Controller', () => {
  it('should create a new radio head', async () => {
    const res = await request(app)
      .post('/api/radioheads')
      .send({
        name: 'Test RadioHead',
        status: 'active',
        fileName: 'test.mp3',
        settings: {
          incomingVolume: 50,
          outgoingVolume: 50,
          masterVolume: 50,
          color: '#FFFFFF'
        }
      });

    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('name', 'Test RadioHead');
  });
});
