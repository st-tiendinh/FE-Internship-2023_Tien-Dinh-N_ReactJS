import { combineReducers } from 'redux';

import { cartReducer } from './cart';
import { productReducer } from './product';

export const rootReducer = combineReducers({ cartList: cartReducer, productList: productReducer });
export type RootState = ReturnType<typeof rootReducer>;
