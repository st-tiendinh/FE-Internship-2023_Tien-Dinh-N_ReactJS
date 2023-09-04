import { useSelector } from 'react-redux';

import { CartItem } from '../CartItem/CartItem';

import { CartItemService } from '../../../../../services/CartService';
import { CartItemProps } from '../../../../core/models/cart';
import { RootState } from '../../../../../redux/reducers/rootReducer';

export const CartList = () => {
  const cart = useSelector((state: RootState) => state.cartList.cartItems);

  return (
    <ul className="product-cart-list">
      {cart.map((item: CartItemProps) => {
        const cartItemEntity = new CartItemService(item);
        return <CartItem key={item.id} cartItemEntity={cartItemEntity} />;
      })}
    </ul>
  );
};
