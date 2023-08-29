import { useState, createContext, ReactElement, useEffect } from 'react';
import { StorageKey, getFromLocalStorage, saveToLocalStorage } from '../../../shared/utlis/localStorage';
import { CartItemInterface } from '../models/cart';

export type dataInterface = {
  cartItems: CartItemInterface;
  setCartItems: (cartItems: CartItemInterface) => void;
};

export const CartContext = createContext({});

interface CartProviderPropTypes {
  children: ReactElement;
}

export const CartProvider = ({ children }: CartProviderPropTypes) => {
  const [cartItems, setCartItems] = useState(getFromLocalStorage<CartItemInterface[]>(StorageKey.Product, []));

  useEffect(() => saveToLocalStorage<CartItemInterface[]>(StorageKey.Product, cartItems), [cartItems]);

  return <CartContext.Provider value={{ cartItems, setCartItems }}>{children}</CartContext.Provider>;
};
