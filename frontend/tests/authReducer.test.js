import authReducer from '../authReducer';
import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from '../types';

describe('Auth Reducer', () => {
  const initialState = {
    user: null,
    isAuthenticated: false,
  };

  it('should handle LOGIN_SUCCESS', () => {
    const action = {
      type: LOGIN_SUCCESS,
      payload: { id: 1, name: 'John Doe' },
    };

    const expectedState = {
      user: action.payload,
      isAuthenticated: true,
    };

    expect(authReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle LOGIN_FAIL', () => {
    const action = { type: LOGIN_FAIL };

    const expectedState = {
      user: null,
      isAuthenticated: false,
    };

    expect(authReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle LOGOUT', () => {
    const action = { type: LOGOUT };

    const expectedState = {
      user: null,
      isAuthenticated: false,
    };

    expect(authReducer(initialState, action)).toEqual(expectedState);
  });
});
