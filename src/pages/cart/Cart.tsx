import { Link } from 'react-router-dom';

import cartEmptyImg from '../../assets/images/cart-empty.png';

import { CartEntity } from '../../services/CartService';
import { CartItemEntity } from '../../services/CartService';
import { CartItemInterface } from '../../app/core/models/cart';

interface CartPropTypes {
  cartItemsData: CartItemInterface[];
  setCartItems: (shoppingCart: any) => void;
}

const Cart = ({ cartItemsData, setCartItems }: CartPropTypes) => {
  const shoppingCart = new CartEntity(cartItemsData);

  return (
    <div className='cart-page'>
      <div className='container'>
        <section className='section section-cart'>
          {shoppingCart.cartItems?.length ? (
            <div className='row'>
              <div className='col col-9'>
                <div className='section-cart-header row'>
                  <h4 className='section-cart-header-title col col-6'>Product</h4>
                  <h4 className='section-cart-header-title col col-3'>Quantity</h4>
                  <h4 className='section-cart-header-title col col-3'>Price</h4>
                </div>
                <ul className='product-cart-list'>
                  {cartItemsData.map((item: CartItemInterface) => {
                    const cartItemEntity = new CartItemEntity(item);
                    const { id, name, imageUrl, discount, price, quantity } = item;
                    return (
                      <li className='product-cart-item' key={id}>
                        <div className='product-cart row'>
                          <div className='product-cart-info col col-6'>
                            <img src={imageUrl} alt='' className='product-cart-img' />
                            <div className='product-cart-desc'>
                              <h4 className='product-cart-name'>{name}</h4>
                              <span className='product-cart-id'>ID: {id}</span>
                              <div className='product-cart-prices'>
                                <span className={discount ? 'sale-price active' : 'sale-price'}>
                                  ${cartItemEntity.calcDiscountPrice()}
                                </span>
                                <span className='original-price'>{discount ? '$' + price : ''}</span>
                              </div>
                            </div>
                          </div>
                          <div className='product-cart-action col col-3'>
                            <div className='product-cart-quantity-wrapper'>
                              <button
                                className='decrease btn btn-step-outline'
                                onClick={() => setCartItems(shoppingCart.handleClickChangeQuantity(id, -1))}
                              >
                                -
                              </button>
                              <input
                                className='product-cart-quantity-input'
                                type='number'
                                min='0'
                                name='number'
                                value={quantity}
                                onChange={() => {}}
                              />
                              <button
                                className='increase btn btn-step-outline'
                                onClick={() => setCartItems(shoppingCart.handleClickChangeQuantity(id, 1))}
                              >
                                +
                              </button>
                            </div>
                            <span
                              className='btn btn-delete-outline'
                              onClick={() => setCartItems(shoppingCart.handleDeleteProduct(id))}
                            >
                              Delete
                            </span>
                          </div>

                          <div className='product-cart-total col col-3'>
                            <p className='product-cart-total-price'>${cartItemEntity.calcProductTotalPrice()}</p>
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className='col col-3'>
                <div className='cart'>
                  <div className='cart-checkout'>
                    <div className='cart-checkout-info'>
                      <h4 className='cart-checkout-total-title'>Total</h4>
                      <span className='cart-checkout-total-price'>${shoppingCart.calcProductAllTotalPrice()}</span>
                    </div>
                    <span className='btn btn-checkout-primary'>Buy now</span>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className='cart-empty'>
              <img src={cartEmptyImg} className='cart-empty-img' alt='cart empty' />
              <Link to='/' className='btn btn-outline-primary'>
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
