import { ProductInterface } from './product';

export interface CartItemProps extends Omit<ProductInterface, 'status'> {
  quantity: number;
  calcProductTotalPrice(): number;
}

export interface CartProps {
  cartItems: CartItemProps[];

  calcCartAllQuantity: () => number;
  calcProductAllTotalPrice: () => number;
}
