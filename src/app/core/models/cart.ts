import { ProductInterface } from './product';

export interface CartItemInterface extends Omit<ProductInterface, 'status'> {
  quantity: number;
  calcProductTotalPrice(): number;
}

export interface CartInterface {
  cartItems: CartItemInterface[];

  calcCartAllQuantity: () => number;
  calcProductAllTotalPrice: () => number;
  handleClickChangeQuantity: (id: number, step: number) => void;
  handleDeleteProduct: (id: number) => void;
  handleAddToCart: (id: number, productData: ProductInterface) => void;
}
