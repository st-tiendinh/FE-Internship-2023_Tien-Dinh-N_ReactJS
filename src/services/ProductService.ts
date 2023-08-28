import { ProductInterface, ProductStatus } from '../app/core/models/product';

export class ProductEntity implements ProductInterface {
  id: number;
  name: string;
  discount: number;
  price: number;
  imageUrl: string;
  status: ProductStatus;

  constructor(props: ProductInterface) {
    const { id, name, discount, price, imageUrl, status } = props;
    this.id = id;
    this.name = name;
    this.discount = discount;
    this.price = price;
    this.imageUrl = imageUrl;
    this.status = status;
  }

  calcDiscountPrice = (): number => {
    return parseFloat((this.price * (1 - this.discount / 100)).toFixed(2));
  };
}
