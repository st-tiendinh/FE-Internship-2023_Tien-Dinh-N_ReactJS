import { useSelector } from 'react-redux';

import { CartItem } from '../CartItem/CartItem';

import { CartItemService } from '../../../../../services/CartService';
import { CartItemProps } from '../../../../core/models/cart';
import { RootState } from '../../../../../redux/reducers/root';

export const CartList = () => {
  const cart = useSelector((state: RootState) => state.cartList.cartItems);

  return (
    <ul className="product-cart-list">
      {cart.map((item: CartItemProps) => {
        const cartItemEntity = new CartItemService(item);
        const { id, name, imageUrl, discount, price, quantity } = cartItemEntity;
        return (
          <CartItem
            key={id}
            id={id}
            name={name}
            price={price}
            discount={discount}
            imageUrl={imageUrl}
            quantity={quantity}
            discountPrice={cartItemEntity.calcDiscountPrice()}
            productTotalPrice={cartItemEntity.calcProductTotalPrice()}
          />
        );
      })}
    </ul>
  );
};
