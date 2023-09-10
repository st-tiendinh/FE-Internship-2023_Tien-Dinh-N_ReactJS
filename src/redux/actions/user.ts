import { UserProps } from '../../app/core/models/user';
import { StorageKey, saveToLocalStorage } from '../../shared/utils/localStorage';
import { LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT, SET_SHOW_TOAST } from '../types/user';

export const loginRequest = () => {
  return {
    type: LOGIN_REQUEST,
  };
};

export const loginSuccess = (data: any, message: string) => {
  return {
    type: LOGIN_SUCCESS,
    payload: { data, message },
  };
};

export const loginFail = (error: string | null) => {
  return {
    type: LOGIN_FAIL,
    payload: { error },
  };
};

export const logout = (message: string) => {
  return {
    type: LOGOUT,
    payload: { message },
  };
};

export const setShowToast = (show: boolean) => {
  return {
    type: SET_SHOW_TOAST,
    payload: { show },
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
        dispatch(loginSuccess(existUser, 'Login success'));
        saveToLocalStorage<UserProps>(StorageKey.User, existUser);
      } else {
        dispatch(loginFail('No existed user'));
      }
    } catch (error: any) {
      dispatch(loginFail(error));
    }
  }, 2000);
};
