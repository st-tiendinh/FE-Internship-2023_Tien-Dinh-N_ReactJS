import React from 'react';
import './stylesheet/style.scss';
import { Routes, Route } from 'react-router-dom';
import Cart from './pages/cart/Cart';
import Home from './pages/home/Home';
import { Header, Footer } from './shared/components';

function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/cart' Component={Cart} /> {/* Route cho trang giỏ hàng */}
        <Route path='/' Component={Home} /> {/* Route cho trang chính */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
