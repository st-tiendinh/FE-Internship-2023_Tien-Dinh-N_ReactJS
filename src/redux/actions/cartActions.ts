import { CartItemModel } from '../../app/core/models/cart';
import { CHANGE_CART_ITEM_QUANTITY, DELETE_CART_ITEM, SET_CART } from '../constants/cartTypes';

export const setCart = (cartItems: CartItemModel[]) => {
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
