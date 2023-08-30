import { useContext } from 'react';
import { CartItemService, CartService } from '../../../../../services/CartService';
import { CartContext } from '../../../../core/contexts/CartContext';

interface CartItemPropTypes {
  id: number;
  name: string;
  imageUrl: string;
  discount: number;
  price: number;
  quantity: number;
  cartItemEntity: CartItemService;
  shoppingCart: CartService;
}

export const CartItem = ({
  id,
  name,
  imageUrl,
  discount,
  price,
  quantity,
  cartItemEntity,
  shoppingCart,
}: CartItemPropTypes) => {
  const context = useContext(CartContext);
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
            <button
              className="decrease btn btn-step-outline"
              onClick={() => context.setCartItems(shoppingCart.handleClickChangeQuantity(id, quantity - 1))}
            >
              -
            </button>
            <input
              className="product-cart-quantity-input"
              type="number"
              min="0"
              name="number"
              value={quantity}
              onChange={() => {}}
            />
            <button
              className="increase btn btn-step-outline"
              onClick={() => context.setCartItems(shoppingCart.handleClickChangeQuantity(id, quantity + 1))}
            >
              +
            </button>
          </div>
          <span
            className="btn btn-delete-outline"
            onClick={() => context.setCartItems(shoppingCart.handleDeleteProduct(id))}
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
