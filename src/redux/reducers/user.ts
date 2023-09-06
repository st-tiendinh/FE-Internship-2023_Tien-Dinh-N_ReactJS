import { LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT } from '../types/user';

interface LoginState {
  user: any;
  isLoading: boolean;
  error: string | null;
  isLogged: boolean;
}

const initialState: LoginState = {
  user: null,
  isLoading: false,
  error: null,
  isLogged: false,
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

    [LOGOUT]: () => initialState,
  };
  return typeof objReducer[action.type] === 'function' ? objReducer[action.type]() : state;
};
