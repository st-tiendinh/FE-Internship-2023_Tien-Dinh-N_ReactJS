import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { ProductImage } from './ProductImage';

import { StorageKey, saveToLocalStorage } from '../utils/localStorage';
import { ProductProps, ProductStatus } from '../../app/core/models/product';
import { ProductService } from '../../services/ProductService';

import { setShowModal } from '../../redux/actions/modal';
import { RootState } from '../../redux/reducers/root';
import { setCart } from '../../redux/actions/cart';

interface ProductItemPropTypes {
  productItem: ProductProps;
}

export const ProductItem = ({ productItem }: ProductItemPropTypes) => {
  const cart = useSelector((state: RootState) => state.cartList.cartItems);
  const isLogged = useSelector((state: RootState) => state.user.isLogged);
  const dispatch = useDispatch();

  const productEntity = new ProductService(productItem);
  const { id, name, discount, imageUrl, price, status } = productEntity;

  const handleClickAddToCart = (
    event: React.MouseEvent<HTMLButtonElement>,
    productData: ProductProps
  ) => {
    event.preventDefault();
    if (isLogged) {
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
    } else {
      dispatch(setShowModal());
    }
  };

  useEffect(() => {
    saveToLocalStorage(StorageKey.Product, cart);
  }, [cart]);

  return (
    <li key={id} className="product-item col col-3 col-md-6 col-sm-6">
      <div className="product">
        <a className="product-link" href="/#" onClick={(e) => e.preventDefault()}>
          <ProductImage src={imageUrl} alt={name} />
          {status === ProductStatus.OUT_OF_STOCK && (
            <div className="product-status">
              <span className="badge badge-outline-primary">Out of Stock</span>
            </div>
          )}
          <button
            className="btn btn-rounded-primary"
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
