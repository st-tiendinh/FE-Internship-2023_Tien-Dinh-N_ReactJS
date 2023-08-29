import { useEffect, useState } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Home from './app/pages/home/Home';
import Cart from './app/pages/cart/Cart';
import { Header, Footer } from './shared/components';

import './stylesheet/style.scss';
import product1 from './assets/images/product-1.png';
import product2 from './assets/images/product-2.png';
import product3 from './assets/images/product-3.png';
import product4 from './assets/images/product-4.png';
import { StorageKey, getFromLocalStorage, saveToLocalStorage } from './shared/utils/localStorage';
import { appRoutes } from './app.route';

import { CartItemModel } from './app/core/models/cart';
import { ProductService } from './services/ProductService';
import { CartService } from './services/CartService';

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

const productData = data.map((item: any) => new ProductService(item));

function App() {
  const [cartItems, setCartItems] = useState(getFromLocalStorage<CartItemModel[]>(StorageKey.Product, []));

  useEffect(() => saveToLocalStorage<CartItemModel[]>(StorageKey.Product, cartItems), [cartItems]);

  return (
    <div className="App">
      <BrowserRouter>
        <Header cartTotalQuantity={new CartService(cartItems).calcCartAllQuantity()} />
        <main className="main">
          <Routes>
            {appRoutes.map(({ path, element }) => {
              const Page = element;
              return (
                <Route
                  key={Date.now()}
                  path={path}
                  element={
                    (Page === Cart && <Page cartData={cartItems} setCartItems={setCartItems} />) ||
                    (Page === Home && <Page productData={productData} setCartItems={setCartItems} />)
                  }
                />
              );
            })}
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
