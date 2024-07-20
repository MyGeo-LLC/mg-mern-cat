import { login, logout } from '../authActions';
import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from '../types';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as api from '../../api/api';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

jest.mock('../../api/api');

describe('Auth Actions', () => {
  let store;

  beforeEach(() => {
    store = mockStore({});
  });

  it('dispatches LOGIN_SUCCESS after a successful login', async () => {
    const userData = { email: 'test@example.com', password: 'password' };
    const responseData = { id: 1, name: 'John Doe' };

    api.login.mockResolvedValue({ data: responseData });

    await store.dispatch(login(userData.email, userData.password));

    const actions = store.getActions();
    expect(actions[0]).toEqual({ type: LOGIN_SUCCESS, payload: responseData });
  });

  it('dispatches LOGIN_FAIL after a failed login', async () => {
    const userData = { email: 'test@example.com', password: 'password' };

    api.login.mockRejectedValue(new Error('Login failed'));

    await store.dispatch(login(userData.email, userData.password));

    const actions = store.getActions();
    expect(actions[0]).toEqual({ type: LOGIN_FAIL });
  });

  it('dispatches LOGOUT', () => {
    store.dispatch(logout());

    const actions = store.getActions();
    expect(actions[0]).toEqual({ type: LOGOUT });
  });
});
