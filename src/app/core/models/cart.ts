import { ProductInterface } from './product';

export interface CartItemInterface extends Omit<ProductInterface, 'status'> {
  quantity: number;
}

export interface CartInterface {
  cartItems: CartItemInterface[];
}
