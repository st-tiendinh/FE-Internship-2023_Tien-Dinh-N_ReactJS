import { combineReducers } from 'redux';

import { cartReducer } from './cartReducer';
import { productReducer } from './productReducer';

export const rootReducer = combineReducers({ cartList: cartReducer, productList: productReducer });
export type RootState = ReturnType<typeof rootReducer>;
