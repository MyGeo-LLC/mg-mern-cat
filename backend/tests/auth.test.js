const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../server'); // Your Express app

chai.use(chaiHttp);
const { expect } = chai;

describe('Auth API', () => {
  it('should login a user', (done) => {
    chai.request(app)
      .post('/api/auth/login')
      .send({ email: 'test@test.com', password: 'password1' })
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.have.property('token');
        done();
      });
  });
});

