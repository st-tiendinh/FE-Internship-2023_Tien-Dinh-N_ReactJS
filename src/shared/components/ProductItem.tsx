import { useDispatch, useSelector } from 'react-redux';

import { setCart } from '../../redux/actions/cart';

import { ProductService } from '../../services/ProductService';
import { ProductProps, ProductStatus } from '../../app/core/models/product';
import { RootState } from '../../redux/reducers/root';
import { useEffect } from 'react';
import { StorageKey, saveToLocalStorage } from '../utils/localStorage';

interface ProductItemPropTypes {
  productItem: ProductProps;
}

export const ProductItem = ({ productItem }: ProductItemPropTypes) => {
  const productEntity = new ProductService(productItem);
  const { id, name, discount, imageUrl, price, status } = productEntity;
  const cart = useSelector((state: RootState) => state.cartList.cartItems);
  const dispatch = useDispatch();

  const handleClickAddToCart = (
    event: React.MouseEvent<HTMLButtonElement>,
    productData: ProductProps
  ) => {
    event.preventDefault();
    if (productData.status !== ProductStatus.OUT_OF_STOCK) {
      const existedProduct = cart.find((item) => id === item.id);
      if (existedProduct) {
        dispatch(
          setCart(
            cart.map((item) =>
              existedProduct.id === item.id ? { ...item, quantity: item.quantity + 1 } : item
            )
          )
        );
      } else {
        dispatch(setCart([...cart, { ...productData, quantity: 1 }]));
      }
    }
  };

  useEffect(() => {
    saveToLocalStorage(StorageKey.Product, cart);
  }, [cart]);

  return (
    <li key={id} className="product-item col col-3 col-md-6 col-sm-6">
      <div className="product">
        <a className="product-link" href="/#" onClick={(e) => e.preventDefault()}>
          <img src={imageUrl} alt={name} className="product-image" />
          <div className="product-status">
            <span className="badge badge-outline-primary">
              {status ? 'Available' : 'Out of Stock'}
            </span>
          </div>
          <button
            className="btn btn-primary"
            onClick={(e) => handleClickAddToCart(e, productItem)}
            disabled={status ? false : true}
          >
            Add to cart
          </button>
          {discount ? <span className="badge badge-danger">{discount}%</span> : null}
          <div className="product-description">
            <h4 className="product-name">{name}</h4>
            <div className="product-prices">
              <span className={'sale-price ' + (discount ? 'active' : '')}>
                ${productEntity.calcDiscountPrice()}
              </span>
              <span className="original-price">{discount ? '$' + price : ''}</span>
            </div>
          </div>
        </a>
      </div>
    </li>
  );
};
