import { useSelector } from 'react-redux';

import { CartItem } from '../CartItem/CartItem';

import { CartItemService } from '../../../../../services/CartService';
import { CartItemModel } from '../../../../core/models/cart';
import { StateInterface } from '../../../../../redux/reducer';

export const CartList = () => {
  const cart = useSelector((state: StateInterface) => state.cart);

  return (
    <ul className="product-cart-list">
      {cart.map((item: CartItemModel) => {
        const cartItemEntity = new CartItemService(item);
        return <CartItem key={item.id} cartItemEntity={cartItemEntity} />;
      })}
    </ul>
  );
};
