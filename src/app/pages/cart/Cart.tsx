import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { CartList } from './containers/CartList/CartList';
// import { Modal } from '../../../shared/components';

import cartEmptyImg from '../../../assets/images/cart-empty.png';
import { StorageKey, saveToLocalStorage } from '../../../shared/utils/localStorage';
import { CartService } from '../../../services/CartService';
import { RootState } from '../../../redux/reducers/root';
import { Modal, ModalType } from '../../../shared/components/Modal';
import { deleteCartItem } from '../../../redux/actions/cart';

const Cart = () => {
  const storedCart = useSelector((state: RootState) => state.cartList.cartItems);
  const cartItemCurrentId = useSelector((state: RootState) => state.cartList.cartItemCurrentId);
  const dispatch = useDispatch();
  const cartEntity = new CartService(storedCart);

  useEffect(() => saveToLocalStorage(StorageKey.Product, storedCart), [storedCart]);

  return (
    <div className="cart-page">
      <section className="section section-cart-banner">
        <div className="container">
          <h2 className="cart-banner-title">Shopping Cart</h2>
        </div>
      </section>
      <Modal
        title="Do you want to delete this product?!!"
        type={ModalType.CONFIRM}
        action={() => dispatch(deleteCartItem(cartItemCurrentId))}
      />

      <section className="section section-cart">
        <div className="container">
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

              <div className="col col-3 col-md-12 sticky-bottom">
                <div className="cart">
                  <div className="cart-checkout">
                    <div className="cart-checkout-info">
                      <h4 className="cart-checkout-total-title">Total</h4>
                      <span className="cart-checkout-total-price">
                        ${cartEntity.calcProductAllTotalPrice()}
                      </span>
                    </div>
                    <Link to="/" className="btn btn-normal-outline-primary">
                      Continue shopping
                    </Link>
                    <span className="btn btn-normal-primary">Buy now</span>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="cart-empty">
              <img src={cartEmptyImg} className="cart-empty-img" alt="cart empty" />
              <Link to="/" className="btn btn-normal-outline-primary">
                Continue shopping
              </Link>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Cart;
