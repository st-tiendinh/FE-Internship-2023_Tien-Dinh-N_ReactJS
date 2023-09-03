import { StorageKey, getFromLocalStorage } from '../../shared/utils/localStorage';
import { CartItemModel } from '../../app/core/models/cart';

import { CHANGE_CART_ITEM_QUANTITY, DELETE_CART_ITEM, SET_CART } from '../constants/cartTypes';

export interface CartStateInterface {
  cartItems: CartItemModel[];
}

const initialState = {
  cartItems: getFromLocalStorage<CartItemModel[]>(StorageKey.Product, []),
};

export const cartReducer = (state = initialState, action: any) => {
  const objReducer: Record<string, () => CartStateInterface> = {
    [SET_CART]: () => ({
      ...state,
      cartItems: action.payload.cartItems,
    }),

    [DELETE_CART_ITEM]: () => ({
      ...state,
      cartItems: state.cartItems.filter((item) => item.id !== action.payload.id),
    }),

    [CHANGE_CART_ITEM_QUANTITY]: () => ({
      ...state,
      cartItems: state.cartItems.map((item) =>
        item.id === action.payload.id ? { ...item, quantity: action.payload.newQuantity } : item
      ),
    }),
  };

  return typeof objReducer[action.type] === 'function' ? objReducer[action.type]() : state;
};
