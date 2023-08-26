import { CartItem } from '../../services/CartService';
import { StorageKey, getFromLocalStorage, saveToLocalStorage } from '../../services/localStorageService';
import { CartEntity } from '../../services/CartService';
import cartEmptyImg from '../../assets/images/cart-empty.png';
import { StepEnum } from '../../app/core/models/cart';

const Cart = () => {
  const data = getFromLocalStorage<CartItem[]>(StorageKey.Product, []);
  const cartEntity = new CartEntity(data);

  const handleClickChangeQuantity = (id: number, step: number) => {
    const cartStorage = getFromLocalStorage<CartItem[]>(StorageKey.Product, []);
    const findProduct = cartStorage.find((product: CartItem) => {
      return product.id === id;
    });

    if (findProduct) {
      findProduct.quantity += step;
      if (findProduct.quantity < 1) {
        handleDeleteProduct(findProduct.id);
      } else {
        saveToLocalStorage<Array<any>>(StorageKey.Product, cartStorage);
      }
    }
  };

  const handleDeleteProduct = (id: number) => {
    const cartStorage = getFromLocalStorage<CartItem[]>(StorageKey.Product, []);
    // eslint-disable-next-line no-restricted-globals
    const isAcceptDelete = confirm('Do you want to delete this product?!!');
    if (isAcceptDelete) {
      const newData = cartStorage.filter((product: CartItem) => {
        return product.id !== id;
      });
      if (newData) {
        saveToLocalStorage<CartItem[]>(StorageKey.Product, newData);
      }
    }
  };

  return (
    <>
      {cartEntity.cartItems?.length ? (
        <div className='cart-page'>
          <div className='container'>
            <section className='section section-cart'>
              <div className='row'>
                <div className='col col-9'>
                  <div className='section-cart-header row'>
                    <h4 className='section-cart-header-title col col-6'>Product</h4>
                    <h4 className='section-cart-header-title col col-3'>Quantity</h4>
                    <h4 className='section-cart-header-title col col-3'>Price</h4>
                  </div>
                  <ul className='product-cart-list'>
                    {data.map((product) => {
                      const cartItemEntity = new CartItem(product);
                      const { id, name, imageUrl, discount, price, quantity } = product;
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
                                  onClick={() => handleClickChangeQuantity(id, StepEnum.DECREASE)}
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
                                  onClick={() => handleClickChangeQuantity(id, StepEnum.INCREASE)}
                                >
                                  +
                                </button>
                              </div>
                              <span className='btn btn-delete-outline'>Delete</span>
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
                  <div className='cart-checkout'>
                    <div className='cart-checkout-info'>
                      <h4 className='cart-checkout-total-title'>Total</h4>
                      <span className='cart-checkout-total-price'>{cartEntity.calcProductAllTotalPrice()}</span>
                    </div>
                    <span className='btn btn-checkout-primary'>Buy now</span>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      ) : (
        <div className='cart-empty'>
          <img src={cartEmptyImg} className='cart-empty-img' alt='cart empty' />
          <a href='index.html' className='btn btn-outline-primary'>
            Continue shopping
          </a>
        </div>
      )}
    </>
  );
};

export default Cart;
