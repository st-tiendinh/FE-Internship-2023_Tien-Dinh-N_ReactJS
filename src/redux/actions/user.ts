import { UserProps } from '../../app/core/models/user';
import {
  StorageKey,
  removeFromLocalStorage,
  saveToLocalStorage,
} from '../../shared/utils/localStorage';
import { LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT } from '../types/user';

export const loginRequest = () => {
  return {
    type: LOGIN_REQUEST,
  };
};

export const loginSuccess = (data: any) => {
  return {
    type: LOGIN_SUCCESS,
    payload: { data },
  };
};

export const loginFail = (error: string | null) => {
  return {
    type: LOGIN_FAIL,
    payload: { error },
  };
};

export const login = (email: string, password: string) => async (dispatch: any) => {
  dispatch(loginRequest());
  setTimeout(async () => {
    try {
      const response = await fetch('./auth.json');
      const data = await response.json();
      const existUser = await data.find(
        (user: UserProps) => user.email === email && user.password === password
      );
      if (existUser) {
        dispatch(loginSuccess(existUser));
        saveToLocalStorage<UserProps>(StorageKey.User, existUser);
      } else {
        dispatch(loginFail('No existed user'));
      }
    } catch (error: any) {
      dispatch(loginFail(error));
    }
  }, 4000);
};

export const logout = () => {
  return {
    type: LOGOUT,
  };
};
