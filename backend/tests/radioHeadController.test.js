const request = require('supertest');
const app = require('../server');
const { connectDB, closeDB } = require('../utils/connectDB');

beforeAll(async () => {
  await connectDB();
});

afterAll(async () => {
  await closeDB();
});

describe('RadioHead API', () => {
  it('should get all radio heads', async () => {
    const res = await request(app)
      .get('/api/radiohead')
      .set('Authorization', `Bearer validToken`);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toBeInstanceOf(Array);
  });

  it('should create a new radio head', async () => {
    const res = await request(app)
      .post('/api/radiohead')
      .set('Authorization', `Bearer validAdminToken`)
      .send({
        name: 'Test Radio Head',
        status: 'active',
        fileName: 'testfile.json',
        settings: {
          incomingVolume: 50,
          outgoingVolume: 50,
          masterVolume: 50,
          color: '#ff0000',
        },
      });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('_id');
  });

  it('should not create a radio head with invalid data', async () => {
    const res = await request(app)
      .post('/api/radiohead')
      .set('Authorization', `Bearer validAdminToken`)
      .send({
        name: '',
        status: 'invalidstatus',
        fileName: '',
        settings: {
          incomingVolume: 150,
          outgoingVolume: -10,
          masterVolume: 'notanumber',
          color: 'invalidcolor',
        },
      });
    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty('errors');
  });
});
