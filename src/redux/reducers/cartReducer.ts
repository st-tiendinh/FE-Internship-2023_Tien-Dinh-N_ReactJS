import { StorageKey, getFromLocalStorage } from '../../shared/utils/localStorage';
import { CartItemProps } from '../../app/core/models/cart';

import { CHANGE_CART_ITEM_QUANTITY, DELETE_CART_ITEM, SET_CART } from '../constants/cartTypes';

export interface CartStateProps {
  cartItems: CartItemProps[];
}

const initialState = {
  cartItems: getFromLocalStorage<CartItemProps[]>(StorageKey.Product, []),
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
  };

  return typeof objReducer[action.type] === 'function' ? objReducer[action.type]() : state;
};
