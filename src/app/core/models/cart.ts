import { ProductProps } from './product';

export interface CartItemProps extends Omit<ProductProps, 'status'> {
  quantity: number;
}

export interface CartProps {
  cart: CartItemProps[];
}
