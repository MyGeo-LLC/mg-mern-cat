const jwt = require('jsonwebtoken');
const generateToken = require('../utils/generateToken');

jest.mock('jsonwebtoken');
jest.mock('../utils/logger');

describe('Generate Token', () => {
  it('should generate a token with user ID and role', () => {
    const mockId = '12345';
    const mockRole = 'admin';
    const mockToken = 'mocked_token';

    jwt.sign.mockReturnValue(mockToken);

    const token = generateToken(mockId, mockRole);

    expect(jwt.sign).toHaveBeenCalledWith(
      { id: mockId, role: mockRole },
      process.env.JWT_SECRET,
      { expiresIn: '30d' }
    );
    expect(token).toBe(mockToken);
  });

  it('should log an error and throw if token generation fails', () => {
    const mockId = '12345';
    const mockRole = 'admin';

    jwt.sign.mockImplementation(() => {
      throw new Error('Token generation error');
    });

    expect(() => generateToken(mockId, mockRole)).toThrow('Token generation failed');
  });
});
