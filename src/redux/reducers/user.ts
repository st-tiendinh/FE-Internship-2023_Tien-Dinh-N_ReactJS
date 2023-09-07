import { UserProps } from '../../app/core/models/user';
import { StorageKey, getFromLocalStorage } from '../../shared/utils/localStorage';
import { LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT } from '../types/user';

interface LoginState {
  user: UserProps;
  isLoading: boolean;
  error: string | null;
  isLogged: boolean;
}

const initialState: LoginState = {
  user: getFromLocalStorage(StorageKey.User, { id: '', email: '', password: '' }),
  isLoading: false,
  error: null,
  isLogged: !!getFromLocalStorage(StorageKey.User, null),
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
    }),

    [LOGIN_FAIL]: () => ({
      ...state,
      isLoading: false,
      error: action.payload.error,
    }),

    [LOGOUT]: () => {
      return {
        ...initialState,
        user: null,
      };
    },
  };
  return typeof objReducer[action.type] === 'function' ? objReducer[action.type]() : state;
};
