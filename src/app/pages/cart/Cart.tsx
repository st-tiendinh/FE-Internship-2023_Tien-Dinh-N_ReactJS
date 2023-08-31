import { Link } from 'react-router-dom';

import cartEmptyImg from '../../../assets/images/cart-empty.png';

import { CartService } from '../../../services/CartService';
import { CartList } from './containers/CartList/CartList';
import { useContext } from 'react';
import { CartContext } from '../../core/contexts/CartContext';

const Cart = () => {
  const context = useContext(CartContext);
  const shoppingCart = new CartService(context.cartItems);

  return (
    <div className="cart-page">
      <div className="container">
        <section className="section section-cart">
          {shoppingCart.cartItems?.length ? (
            <div className="row">
              <div className="col col-9">
                <div className="section-cart-header row">
                  <h4 className="section-cart-header-title col col-6">Product</h4>
                  <h4 className="section-cart-header-title col col-3">Quantity</h4>
                  <h4 className="section-cart-header-title col col-3">Price</h4>
                </div>
                <CartList shoppingCart={shoppingCart} />
              </div>
              <div className="col col-3">
                <div className="cart">
                  <div className="cart-checkout">
                    <div className="cart-checkout-info">
                      <h4 className="cart-checkout-total-title">Total</h4>
                      <span className="cart-checkout-total-price">${shoppingCart.calcProductAllTotalPrice()}</span>
                    </div>
                    <span className="btn btn-checkout-primary">Buy now</span>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="cart-empty">
              <img src={cartEmptyImg} className="cart-empty-img" alt="cart empty" />
              <Link to="/" className="btn btn-outline-primary">
                Continue shopping
              </Link>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default Cart;
