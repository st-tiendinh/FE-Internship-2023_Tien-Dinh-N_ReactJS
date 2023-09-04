import { useDispatch } from 'react-redux';

import { CartItemService } from '../../../../../services/CartService';
import { changeCartItemQuantity, deleteCartItem } from '../../../../../redux/actions/cartActions';

interface CartItemPropTypes {
  cartItemEntity: CartItemService;
}

export const CartItem = ({ cartItemEntity }: CartItemPropTypes) => {
  const { id, name, imageUrl, discount, price, quantity } = cartItemEntity;
  const dispatch = useDispatch();

  const handleDelete = (id: number) => {
    if (window.confirm('Do you want to delete this product?!!')) {
      dispatch(deleteCartItem(id));
    }
  };

  const handleChangeQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) {
      handleDelete(id);
    } else {
      dispatch(changeCartItemQuantity(id, newQuantity));
    }
  };

  return (
    <li className="product-cart-item" key={id}>
      <div className="product-cart">
        <div className="row">
          <div className="col col-6 col-sm-8">
            <div className="product-cart-info">
              <img src={imageUrl} alt="" className="product-cart-img" />
              <div className="product-cart-desc">
                <h4 className="product-cart-name">{name}</h4>
                <div className="product-cart-prices">
                  <span className={'sale-price ' + (discount ? 'active' : '')}>
                    ${cartItemEntity.calcDiscountPrice()}
                  </span>
                  <span className="original-price">{discount ? '$' + price : ''}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="col col-6 col-sm-4">
            <div className="row">
              <div className="col col-6 col-sm-12">
                <div className="product-cart-action">
                  <div className="product-cart-quantity-wrapper">
                    <button
                      className="decrease btn btn-step-outline"
                      onClick={() => handleChangeQuantity(id, quantity - 1)}
                    >
                      -
                    </button>
                    <input
                      className="product-cart-quantity-input"
                      type="number"
                      min="0"
                      name="number"
                      value={quantity}
                      onChange={() => {
                        handleChangeQuantity(id, quantity);
                      }}
                    />
                    <button
                      className="increase btn btn-step-outline"
                      onClick={() => handleChangeQuantity(id, quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                  <span className="btn btn-delete-outline" onClick={() => handleDelete(id)}>
                    Delete
                  </span>
                </div>
              </div>

              <div className="col col-6 col-sm-12">
                <div className="product-cart-total">
                  <p className="product-cart-total-price text-center">
                    ${cartItemEntity.calcProductTotalPrice()}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
