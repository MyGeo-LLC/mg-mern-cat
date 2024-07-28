const { protect, admin } = require('../../middleware/authMiddleware');
const jwt = require('jsonwebtoken');
const User = require('../../models/User');

jest.mock('jsonwebtoken');
jest.mock('../../models/User');

describe('Auth Middleware', () => {
  describe('protect', () => {
    it('should authorize a valid token', async () => {
      const req = { headers: { authorization: 'Bearer validToken' } };
      const res = {};
      const next = jest.fn();

      jwt.verify.mockReturnValue({ id: 'validUserId' });
      User.findById.mockResolvedValue({ id: 'validUserId' });

      await protect(req, res, next);
      expect(next).toHaveBeenCalled();
    });

    it('should not authorize an invalid token', async () => {
      const req = { headers: { authorization: 'Bearer invalidToken' } };
      const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
      const next = jest.fn();

      jwt.verify.mockImplementation(() => {
        throw new Error('Invalid token');
      });

      await protect(req, res, next);
      expect(res.status).toHaveBeenCalledWith(401);
      expect(res.json).toHaveBeenCalledWith({ message: 'Not authorized, token failed' });
    });
  });

  describe('admin', () => {
    it('should authorize an admin user', () => {
      const req = { user: { role: 'admin' } };
      const res = {};
      const next = jest.fn();

      admin(req, res, next);
      expect(next).toHaveBeenCalled();
    });

    it('should not authorize a non-admin user', () => {
      const req = { user: { role: 'user' } };
      const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
      const next = jest.fn();

      admin(req, res, next);a
      expect(res.status).toHaveBeenCalledWith(403);
      expect(res.json).toHaveBeenCalledWith({ message: 'Not authorized as an admin' });
    });
  });
});
