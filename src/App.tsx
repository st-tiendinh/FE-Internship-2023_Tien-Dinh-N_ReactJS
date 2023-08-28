import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/home/Home';
import Cart from './pages/cart/Cart';
import { Header, Footer } from './shared/components';

import './stylesheet/style.scss';
import product1 from './assets/images/product-1.png';
import product2 from './assets/images/product-2.png';
import product3 from './assets/images/product-3.png';
import product4 from './assets/images/product-4.png';
import { StorageKey, getFromLocalStorage, saveToLocalStorage } from './shared/utlis/localStorage';
import { appRoutes } from './app.route';

import { ProductInterface, ProductStatus } from './app/core/models/product';
import { CartItemInterface } from './app/core/models/cart';
import { ProductEntity } from './services/ProductService';
import { CartEntity } from './services/CartService';

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

const productData = data.map((item: any) => new ProductEntity(item));

function App() {
  const [cartItems, setCartItems] = useState(getFromLocalStorage<any[]>(StorageKey.Product, []));

  const handleAddToCart = (id: number, productData: ProductInterface) => {
    if (productData.status !== ProductStatus.OUT_OF_STOCK) {
      const existedProduct = cartItems.find((item: CartItemInterface) => {
        return id === item.id;
      });

      if (existedProduct) {
        setCartItems(
          cartItems.map((item: CartItemInterface) => {
            return existedProduct.id === item.id ? { ...item, quantity: item.quantity + 1 } : item;
          })
        );
      } else {
        setCartItems([...cartItems, { ...productData, quantity: 1 }]);
      }
    }
  };

  const handleClickChangeQuantity = (id: number, step: number) => {
    const findProduct = cartItems.find((item: CartItemInterface) => {
      return item.id === id;
    });

    if (findProduct) {
      let countQuantity = findProduct.quantity;
      countQuantity += step;
      if (countQuantity < 1) {
        handleDeleteProduct(findProduct.id);
      } else {
        setCartItems(
          cartItems.map((item: CartItemInterface) => {
            return findProduct.id === item.id ? { ...item, quantity: countQuantity } : item;
          })
        );
      }
    }
  };

  const handleDeleteProduct = (id: number) => {
    // eslint-disable-next-line no-restricted-globals
    const isAcceptDelete = confirm('Do you want to delete this product?!!');
    if (isAcceptDelete) {
      setCartItems(
        cartItems.filter((item: CartItemInterface) => {
          return item.id !== id;
        })
      );
    }
  };

  useEffect(() => saveToLocalStorage<CartItemInterface[]>(StorageKey.Product, cartItems), [cartItems]);

  return (
    <div className='App'>
      <Header cartTotalQuantity={new CartEntity(cartItems).calcCartAllQuantity()} />
      <main className='main'>
        <Routes>
          {appRoutes.map(({ path, element }) => {
            const Page = element;
            return (
              <Route
                key={Date.now()}
                path={path}
                element={
                  (Page === Cart && (
                    <Page
                      cartItemsData={cartItems}
                      onClickChangeQuantity={handleClickChangeQuantity}
                      onClickDeleteProduct={handleDeleteProduct}
                    />
                  )) ||
                  (Page === Home && <Page productData={productData} onClickAddToCart={handleAddToCart} />)
                }
              />
            );
          })}
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
