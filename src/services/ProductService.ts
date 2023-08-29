import { ProductModel, ProductStatus } from '../app/core/models/product';

export class ProductService implements ProductModel {
  id: number;
  name: string;
  discount: number;
  price: number;
  imageUrl: string;
  status: ProductStatus;

  constructor(props: ProductModel) {
    const { id, name, discount, price, imageUrl, status } = props;
    this.id = id || 0;
    this.name = name || '';
    this.discount = discount || 0;
    this.price = price || 0;
    this.imageUrl = imageUrl || '';
    this.status = status || ProductStatus.OUT_OF_STOCK;
  }

  calcDiscountPrice = (): number => {
    return parseFloat((this.price * (1 - this.discount / 100)).toFixed(2));
  };
}
