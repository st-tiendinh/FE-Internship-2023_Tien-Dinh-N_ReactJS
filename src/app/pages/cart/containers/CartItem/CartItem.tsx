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
      <div className="product-cart row">
        <div className="product-cart-info col col-6">
          <img src={imageUrl} alt="" className="product-cart-img" />
          <div className="product-cart-desc">
            <h4 className="product-cart-name">{name}</h4>
            <span className="product-cart-id">ID: {id}</span>
            <div className="product-cart-prices">
              <span className={discount ? 'sale-price active' : 'sale-price'}>
                ${cartItemEntity.calcDiscountPrice()}
              </span>
              <span className="original-price">{discount ? '$' + price : ''}</span>
            </div>
          </div>
        </div>
        <div className="product-cart-action col col-3">
          <div className="product-cart-quantity-wrapper">
            <button className="decrease btn btn-step-outline" onClick={() => handleChangeQuantity(id, quantity - 1)}>
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
            <button className="increase btn btn-step-outline" onClick={() => handleChangeQuantity(id, quantity + 1)}>
              +
            </button>
          </div>
          <span
            className="btn btn-delete-outline"
            onClick={() => handleDelete(id)}
          >
            Delete
          </span>
        </div>

        <div className="product-cart-total col col-3">
          <p className="product-cart-total-price">${cartItemEntity.calcProductTotalPrice()}</p>
        </div>
      </div>
    </li>
  );
};
