import { StorageKey, getFromLocalStorage } from '../shared/utils/localStorage';
import { CartItemModel } from '../app/core/models/cart';

import { CHANGE_CART_ITEM_QUANTITY, DELETE_CART_ITEM, SET_CART } from './type';

export interface StateInterface {
  cart: CartItemModel[];
}

const initialState = {
  cart: getFromLocalStorage<CartItemModel[]>(StorageKey.Product, []),
};

export const cartReducer = (state = initialState, action: any) => {
  const objReducer: Record<string, () => StateInterface> = {
    [SET_CART]: () => ({
      ...state,
      cart: action.payload.cartItems,
    }),

    [DELETE_CART_ITEM]: () => ({
      ...state,
      cart: state.cart.filter((item) => item.id !== action.payload.id),
    }),

    [CHANGE_CART_ITEM_QUANTITY]: () => ({
      ...state,
      cart: state.cart.map((item) =>
        item.id === action.payload.id ? { ...item, quantity: action.payload.newQuantity } : item
      ),
    }),
  };

  return typeof objReducer[action.type] === 'function' ? objReducer[action.type]() : state;
};

