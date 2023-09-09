import { combineReducers } from 'redux';

import { cartReducer } from './cart';
import { productReducer } from './product';
import { userReducer } from './user';
import { modalReducer } from './modal';

export const rootReducer = combineReducers({
  cartList: cartReducer,
  productList: productReducer,
  user: userReducer,
  modal: modalReducer,
});
export type RootState = ReturnType<typeof rootReducer>;
