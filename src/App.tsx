import React from 'react';
import './stylesheet/style.scss';
import { Routes, Route } from 'react-router-dom';
import Cart from './pages/cart/Cart';
import Home from './pages/home/Home';
import { Header, Footer } from './shared/components';
import { StorageKey, getFromLocalStorage, saveToLocalStorage } from './services/localStorageService';
import { useEffect, useState } from 'react';

import product1 from './assets/images/product-1.png';
import product2 from './assets/images/product-2.png';
import product3 from './assets/images/product-3.png';
import product4 from './assets/images/product-4.png';
import { ProductStatus } from './app/core/models/product';
import { CartItem } from './services/CartService';
import { CartItemProps, StepEnum } from './app/core/models/cart';

const productData = [
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

function App() {
  const [cartItems, setCartItems] = useState(getFromLocalStorage<any>(StorageKey.Product, []));

  useEffect(() => saveToLocalStorage<any>(StorageKey.Product, cartItems), [cartItems]);

  const handleAddToCart = (id: number, productData: any) => {
    if (productData.status !== ProductStatus.OUT_OF_STOCK) {
      const existedProduct = cartItems.find((item: CartItem) => {
        return id === item.id;
      });

      if (existedProduct) {
        setCartItems(
          cartItems.map((item: CartItemProps) => {
            return existedProduct.id === item.id ? { ...item, quantity: (item.quantity += 1) } : item;
          })
        );
      } else {
        setCartItems([...cartItems, { ...productData, quantity: 1 }]);
      }
    }
  };

  const handleClickChangeQuantity = (id: number, step: StepEnum) => {
    const findProduct = cartItems.find((product: CartItem) => {
      return product.id === id;
    });

    if (findProduct) {
      setCartItems(
        cartItems.map((item: CartItem) => {
          return findProduct.id === item.id ? { ...item, quantity: (item.quantity += step) } : item;
        })
      );
      if (findProduct.quantity < 1) {
        handleDeleteProduct(findProduct.id);
      }
    }
  };

  const handleDeleteProduct = (id: number) => {
    // eslint-disable-next-line no-restricted-globals
    const isAcceptDelete = confirm('Do you want to delete this product?!!');
    if (isAcceptDelete) {
      setCartItems(
        cartItems.filter((product: CartItem) => {
          return product.id !== id;
        })
      );
    }
  };

  return (
    <div className='App'>
      <Header cartItems={cartItems} />
      <Routes>
        <Route
          path='/cart'
          element={
            <Cart
              cartItems={cartItems}
              changeQuantity={handleClickChangeQuantity}
              deleteProduct={handleDeleteProduct}
            />
          }
        />
        <Route path='/' element={<Home productData={productData} addToCart={handleAddToCart} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
