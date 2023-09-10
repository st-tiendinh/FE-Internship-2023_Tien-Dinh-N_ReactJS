import { CartItemProps } from '../../app/core/models/cart';
import {
  CHANGE_CART_ITEM_QUANTITY,
  DELETE_CART_ITEM,
  GET_CART_ITEM_ID,
  SET_CART,
} from '../types/cart';

export const setCart = (cartItems: CartItemProps[]) => {
  return {
    type: SET_CART,
    payload: { cartItems },
  };
};

export const deleteCartItem = (id: number) => {
  return {
    type: DELETE_CART_ITEM,
    payload: { id },
  };
};

export const changeCartItemQuantity = (id: number, newQuantity: number) => {
  return {
    type: CHANGE_CART_ITEM_QUANTITY,
    payload: { id, newQuantity },
  };
};

export const getCartItemId = (id: number) => {
  return {
    type: GET_CART_ITEM_ID,
    payload: { id },
  };
};
