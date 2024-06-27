import { LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT } from './types';
import { login as loginAPI } from '../../api/api';

export const login = (email, password) => async (dispatch) => {
  try {
    const { data } = await loginAPI({ email, password });
    dispatch({
      type: LOGIN_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: LOGIN_FAIL,
    });
  }
};

export const logout = () => ({
  type: LOGOUT,
});
