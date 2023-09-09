import { StorageKey, getFromLocalStorage } from '../../shared/utils/localStorage';
import { CartItemProps } from '../../app/core/models/cart';

import {
  CHANGE_CART_ITEM_QUANTITY,
  DELETE_CART_ITEM,
  GET_CART_ITEM_ID,
  SET_CART,
} from '../types/cart';

export interface CartStateProps {
  cartItems: CartItemProps[];
  cartItemCurrentId: number;
}

const initialState = {
  cartItems: getFromLocalStorage<CartItemProps[]>(StorageKey.Product, []),
  cartItemCurrentId: 0,
};

export const cartReducer = (state = initialState, action: any) => {
  const objReducer: Record<string, () => CartStateProps> = {
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

    [GET_CART_ITEM_ID]: () => ({
      ...state,
      cartItemCurrentId: action.payload.id,
    }),
  };

  return typeof objReducer[action.type] === 'function' ? objReducer[action.type]() : state;
};
