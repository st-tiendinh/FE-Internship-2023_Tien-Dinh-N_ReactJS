import { useState, createContext, ReactElement, useEffect } from 'react';
import { StorageKey, getFromLocalStorage, saveToLocalStorage } from '../../../shared/utils/localStorage';
import { CartItemModel } from '../models/cart';

export type dataInterface = {
  cartItems: CartItemModel;
  setCartItems: (cartItems: CartItemModel) => void;
};

export const CartContext = createContext({});

interface CartProviderPropTypes {
  children: ReactElement;
}

export const CartProvider = ({ children }: CartProviderPropTypes) => {
  const [cartItems, setCartItems] = useState(getFromLocalStorage<CartItemModel[]>(StorageKey.Product, []));

  useEffect(() => saveToLocalStorage<CartItemModel[]>(StorageKey.Product, cartItems), [cartItems]);

  return <CartContext.Provider value={{ cartItems, setCartItems }}>{children}</CartContext.Provider>;
};
