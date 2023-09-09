import { UserProps } from '../../app/core/models/user';
import { StorageKey, getFromLocalStorage } from '../../shared/utils/localStorage';
import { LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT, SET_SHOW_TOAST } from '../types/user';

interface LoginState {
  user: UserProps;
  error: string | null;
  message: string;
  isLogged: boolean;
  isLoading: boolean;
  isShowMessage: boolean;
}

const initialState: LoginState = {
  user: getFromLocalStorage(StorageKey.User, { id: '', email: '', password: '' }),
  error: null,
  message: '',
  isLogged: !!getFromLocalStorage(StorageKey.User, null),
  isLoading: false,
  isShowMessage: false,
};

export const userReducer = (state = initialState, action: any) => {
  const objReducer: Record<string, () => any> = {
    [LOGIN_REQUEST]: () => ({
      ...state,
      isLoading: true,
    }),

    [LOGIN_SUCCESS]: () => ({
      ...state,
      user: action.payload.user,
      isLoading: false,
      error: null,
      isLogged: true,
      isShowMessage: true,
      message: action.payload.message,
    }),

    [LOGIN_FAIL]: () => ({
      ...state,
      isLoading: false,
      error: action.payload.error,
    }),

    [LOGOUT]: () => ({
      ...initialState,
      user: null,
      isLogged: false,
      isShowMessage: true,
      message: action.payload.message,
    }),

    [SET_SHOW_TOAST]: () => ({
      ...state,
      isShowMessage: action.payload.show,
    }),
  };
  return typeof objReducer[action.type] === 'function' ? objReducer[action.type]() : state;
};
