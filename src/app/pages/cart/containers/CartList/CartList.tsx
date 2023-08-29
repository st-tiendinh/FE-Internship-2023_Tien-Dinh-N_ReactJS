import { CartItemService, CartService } from '../../../../../services/CartService';
import { CartItemModel } from '../../../../core/models/cart';
import { CartItem } from '../CartItem/CartItem';

interface CartListPropTypes {
  cartData: CartItemModel[];
  setCartItems: (shoppingCart: any) => void;
  shoppingCart: CartService;
}

export const CartList = ({ cartData, setCartItems, shoppingCart }: CartListPropTypes) => {
  return (
    <ul className="product-cart-list">
      {cartData.map((item: CartItemModel) => {
        const cartItemEntity = new CartItemService(item);
        return (
          <CartItem {...item} cartItemEntity={cartItemEntity} setCartItems={setCartItems} shoppingCart={shoppingCart} />
        );
      })}
    </ul>
  );
};
