import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

import { CartList } from './containers/CartList/CartList';
// import { Modal } from '../../../shared/components';

import cartEmptyImg from '../../../assets/images/cart-empty.png';
import { StorageKey, saveToLocalStorage } from '../../../shared/utils/localStorage';
import { CartService } from '../../../services/CartService';
import { RootState } from '../../../redux/reducers/root';
// import { ModalContext } from '../../context/ModalProvider';

const Cart = () => {
  const storedCart = useSelector((state: RootState) => state.cartList.cartItems);
  const cartEntity = new CartService(storedCart);
  // const { handleConfirm, handleCancel } = useContext(ModalContext);

  useEffect(() => saveToLocalStorage(StorageKey.Product, storedCart), [storedCart]);

  return (
    <div className="cart-page">
      <div className="container">
        {/* <Modal
          title="Do you want to delete this product?!!"
          button={
            <>
              <button className="btn btn-normal-primary" onClick={handleConfirm}>
                Yes
              </button>
              <button className="btn btn-normal-outline-primary" onClick={handleCancel}>
                Cancel
              </button>
            </>
          }
        >
          T-Shirt Summer Vibes
        </Modal> */}
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
        </section>
      </div>
    </div>
  );
};

export default Cart;
