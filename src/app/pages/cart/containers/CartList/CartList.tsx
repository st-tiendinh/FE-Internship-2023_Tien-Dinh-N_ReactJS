import { useContext } from 'react';
import { CartItemService, CartService } from '../../../../../services/CartService';
import { CartItemModel } from '../../../../core/models/cart';
import { CartItem } from '../CartItem/CartItem';
import { CartContext } from '../../../../core/contexts/CartContext';

interface CartListPropTypes {
  shoppingCart: CartService;
}

export const CartList = ({ shoppingCart }: CartListPropTypes) => {
  const context = useContext(CartContext);

  return (
    <ul className="product-cart-list">
      {context.cartItems.map((item: CartItemModel) => {
        const cartItemEntity = new CartItemService(item);
        return <CartItem key={item.id} {...item} cartItemEntity={cartItemEntity} shoppingCart={shoppingCart} />;
      })}
    </ul>
  );
};
