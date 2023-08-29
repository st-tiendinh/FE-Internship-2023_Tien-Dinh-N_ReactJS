import { CartItemModel, CartModel } from '../app/core/models/cart';
import { ProductModel, ProductStatus } from '../app/core/models/product';

export class CartItemService implements CartItemModel {
  id: number;
  name: string;
  discount: number;
  price: number;
  imageUrl: string;
  quantity: number;

  constructor(props: CartItemModel) {
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

export class CartService implements CartModel {
  cartItems: CartItemModel[];

  constructor(cartItems: CartItemModel[]) {
    this.cartItems = cartItems;
  }

  calcCartAllQuantity = (): number => {
    return this.cartItems.reduce((sum, item) => {
      return sum + item.quantity;
    }, 0);
  };

  calcProductAllTotalPrice = (): number => {
    return parseFloat(
      this.cartItems
        .reduce((sum, item) => {
          return sum + item.quantity * item.price * (1 - item.discount / 100);
        }, 0)
        .toFixed(2)
    );
  };

  handleClickChangeQuantity = (id: number, newQuantity: number) => {
    const findProduct = this.cartItems.find((item) => item.id === id);

    if (findProduct) {
      if (newQuantity < 1) {
        return this.handleDeleteProduct(findProduct.id);
      } else {
        return this.cartItems.map((item) => (findProduct.id === item.id ? { ...item, quantity: newQuantity } : item));
      }
    }
  };

  handleDeleteProduct = (id: number) => {
    // eslint-disable-next-line no-restricted-globals
    const isAcceptDelete = confirm('Do you want to delete this product?!!');
    if (isAcceptDelete) {
      return this.cartItems.filter((item) => item.id !== id);
    } else {
      return this.cartItems;
    }
  };

  handleAddToCart = (id: number, productData: ProductModel) => {
    if (productData.status !== ProductStatus.OUT_OF_STOCK) {
      const existedProduct = this.cartItems.find((item) => id === item.id);

      if (existedProduct) {
        return this.cartItems.map((item) =>
          existedProduct.id === item.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...this.cartItems, { ...productData, quantity: 1 }];
      }
    }
  };
}
