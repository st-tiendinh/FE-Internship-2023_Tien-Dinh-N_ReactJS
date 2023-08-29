import { CartItemInterface, CartInterface } from '../app/core/models/cart';
import { ProductInterface, ProductStatus } from '../app/core/models/product';

export class CartItemEntity implements CartItemInterface {
  id: number;
  name: string;
  discount: number;
  price: number;
  imageUrl: string;
  quantity: number;

  constructor(props: CartItemInterface) {
    const { id, name, discount, price, imageUrl, quantity } = props;
    this.id = id;
    this.name = name;
    this.discount = discount;
    this.price = price;
    this.imageUrl = imageUrl;
    this.quantity = quantity;
  }

  calcDiscountPrice = (): number => {
    return parseFloat((this.price * (1 - this.discount / 100)).toFixed(2));
  };

  calcProductTotalPrice = (): number => {
    return parseFloat((this.price * (1 - this.discount / 100) * this.quantity).toFixed(2));
  };
}

export class CartEntity implements CartInterface {
  cartItems: CartItemInterface[];

  constructor(cartItems: CartItemInterface[]) {
    this.cartItems = cartItems;
  }

  calcCartAllQuantity = (): number => {
    return this.cartItems.reduce((sum: number, item: CartItemInterface) => {
      return sum + item.quantity;
    }, 0);
  };

  calcProductAllTotalPrice = (): number => {
    return parseFloat(
      this.cartItems
        .reduce((sum: number, item: CartItemInterface) => {
          return sum + item.quantity * item.price * (1 - item.discount / 100);
        }, 0)
        .toFixed(2)
    );
  };

  handleClickChangeQuantity = (id: number, step: number) => {
    const findProduct = this.cartItems.find((item: CartItemInterface) => {
      return item.id === id;
    });

    if (findProduct) {
      let countQuantity = findProduct.quantity;
      countQuantity += step;
      if (countQuantity < 1) {
        this.handleDeleteProduct(findProduct.id);
      } else {
        return this.cartItems.map((item: CartItemInterface) => {
          return findProduct.id === item.id ? { ...item, quantity: countQuantity } : item;
        });
      }
    }
  };

  handleDeleteProduct = (id: number) => {
    // eslint-disable-next-line no-restricted-globals
    const isAcceptDelete = confirm('Do you want to delete this product?!!');
    if (isAcceptDelete) {
      return this.cartItems.filter((item: CartItemInterface) => {
        return item.id !== id;
      });
    } else {
      return this.cartItems;
    }
  };

  handleAddToCart = (id: number, productData: ProductInterface) => {
    if (productData.status !== ProductStatus.OUT_OF_STOCK) {
      const existedProduct = this.cartItems.find((item: CartItemInterface) => {
        return id === item.id;
      });

      if (existedProduct) {
        return this.cartItems.map((item: CartItemInterface) => {
          return existedProduct.id === item.id ? { ...item, quantity: item.quantity + 1 } : item;
        });
      } else {
        return [...this.cartItems, { ...productData, quantity: 1 }];
      }
    }
  };
}
