import { ProductModel } from './product';

export interface CartItemModel extends Omit<ProductModel, 'status'> {
  quantity: number;
}

export interface CartModel {
  cartItems: CartItemModel[];
}
