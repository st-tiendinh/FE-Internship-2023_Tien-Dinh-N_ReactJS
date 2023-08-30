import { useState, createContext, ReactElement, useEffect } from 'react';
import { StorageKey, getFromLocalStorage, saveToLocalStorage } from '../../../shared/utils/localStorage';
import { CartItemModel } from '../models/cart';

import product1 from '../../../assets/images/product-1.png';
import product2 from '../../../assets/images/product-2.png';
import product3 from '../../../assets/images/product-3.png';
import product4 from '../../../assets/images/product-4.png';
import { ProductService } from '../../../services/ProductService';

const data = [
  {
    id: 1,
    name: 'T-Shirt Summer Vibes',
    discount: 30,
    price: 119.99,
    imageUrl: product1,
    status: 1,
  },
  {
    id: 2,
    name: 'T-Shirt Summer Vibes',
    discount: 0,
    price: 119.99,
    imageUrl: product2,
    status: 1,
  },
  {
    id: 3,
    name: 'T-Shirt Summer Vibes',
    discount: 0,
    price: 79.99,
    imageUrl: product3,
    status: 1,
  },
  {
    id: 4,
    name: 'T-Shirt Summer Vibes',
    discount: 0,
    price: 119.99,
    imageUrl: product4,
    status: 0,
  },
];

export const CartContext = createContext<any>({});

interface CartProviderPropTypes {
  children: ReactElement;
}

export const CartProvider = ({ children }: CartProviderPropTypes) => {
  const [cartItems, setCartItems] = useState(getFromLocalStorage<CartItemModel[]>(StorageKey.Product, []));
  const productData = data.map((item) => new ProductService(item));

  useEffect(() => saveToLocalStorage<CartItemModel[]>(StorageKey.Product, cartItems), [cartItems]);

  return <CartContext.Provider value={{ cartItems, setCartItems, productData }}>{children}</CartContext.Provider>;
};
