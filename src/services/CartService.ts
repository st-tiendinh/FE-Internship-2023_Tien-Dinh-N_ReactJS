import { CartItemProps, CartProps } from '../app/core/models/cart';

export class CartItemService implements CartItemProps {
  id: number;
  name: string;
  discount: number;
  price: number;
  imageUrl: string;
  quantity: number;

  constructor(props: CartItemProps) {
    const { id, name, discount, price, imageUrl, quantity } = props;
    this.id = id || 0;
    this.name = name || '';
    this.discount = discount || 0;
    this.price = price || 0;
    this.imageUrl = imageUrl || '';
    this.quantity = quantity || 0;
  }

  calcDiscountPrice = (): number => {
    return parseFloat((this.price * (1 - this.discount / 100)).toFixed(2));
  };

  calcProductTotalPrice = (): number => {
    return parseFloat((this.price * (1 - this.discount / 100) * this.quantity).toFixed(2));
  };
}

export class CartService implements CartProps {
  cart: CartItemProps[];

  constructor(cart: CartItemProps[]) {
    this.cart = cart;
  }

  calcCartAllQuantity = (): number => {
    return this.cart.reduce((sum, item) => {
      return sum + item.quantity;
    }, 0);
  };

  calcProductAllTotalPrice = (): number => {
    return parseFloat(
      this.cart
        .reduce((sum, item) => {
          return sum + item.quantity * item.price * (1 - item.discount / 100);
        }, 0)
        .toFixed(2)
    );
  };
}
