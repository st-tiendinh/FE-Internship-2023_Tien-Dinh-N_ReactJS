import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { CartList } from './containers/CartList/CartList';

import cartEmptyImg from '../../../assets/images/cart-empty.png';
import { StorageKey, saveToLocalStorage } from '../../../shared/utils/localStorage';
import { CartService } from '../../../services/CartService';
import { RootState } from '../../../redux/reducers/root';

const Cart = () => {
  const storedCart = useSelector((state: RootState) => state.cartList.cartItems);
  const cartEntity = new CartService(storedCart);

  useEffect(() => saveToLocalStorage(StorageKey.Product, storedCart), [storedCart]);

  return (
    <div className="cart-page">
      <div className="container">
        <section className="section section-cart">
          {cartEntity.cart?.length ? (
            <div className="row">
              <div className="col col-9 col-md-12">
                <div className="section-cart-header">
                  <div className="row">
                    <div className="col col-6">
                      <h4 className="section-cart-header-title">Product</h4>
                    </div>

                    <div className="col col-3">
                      <h4 className="section-cart-header-title text-center">Quantity</h4>
                    </div>
                    
                    <div className="col col-3">
                      <h4 className="section-cart-header-title text-center">Price</h4>
                    </div>
                  </div>
                </div>
                <CartList />
              </div>

              <div className="col col-3 col-md-12">
                <div className="cart">
                  <div className="cart-checkout">
                    <div className="cart-checkout-info">
                      <h4 className="cart-checkout-total-title">Total</h4>
                      <span className="cart-checkout-total-price">
                        ${cartEntity.calcProductAllTotalPrice()}
                      </span>
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
