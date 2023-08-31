import { useContext } from 'react';
import { CartItemModel } from '../../app/core/models/cart';
import { ProductModel } from '../../app/core/models/product';
import { CartService } from '../../services/CartService';
import { ProductService } from '../../services/ProductService';
import { StorageKey, getFromLocalStorage } from '../utils/localStorage';
import { CartContext } from '../../app/core/contexts/CartContext';

interface ProductItemPropTypes {
  myKey: number;
  product: ProductModel;
}

export const ProductItem = ({ myKey, product }: ProductItemPropTypes) => {
  const productEntity = new ProductService(product);
  const { id, name, discount, imageUrl, price, status } = productEntity;

  const context = useContext(CartContext);

  const handleClickAddToCart = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    context.setCartItems(
      new CartService(getFromLocalStorage<CartItemModel[]>(StorageKey.Product, [])).handleAddToCart(id, productEntity)
    );
  };

  return (
    <li key={myKey} className="product-item col col-3 col-md-6 col-sm-6">
      <div className="product">
        <a className="product-link" href="/#" onClick={(e) => e.preventDefault()}>
          <img src={imageUrl} alt={name} className="product-image" />
          <div className="product-status">
            <span className="badge badge-outline-primary">{status ? 'Available' : 'Out of Stock'}</span>
          </div>
          <button className="btn btn-primary" onClick={handleClickAddToCart} disabled={status ? false : true}>
            Add to cart
          </button>
          {discount ? <span className="badge badge-danger">{discount}%</span> : null}
          <div className="product-description">
            <h4 className="product-name">{name}</h4>
            <div className="product-prices">
              <span className={discount ? 'sale-price active' : 'sale-price'}>{productEntity.calcDiscountPrice()}</span>
              <span className="original-price">{discount ? '$' + price : ''}</span>
            </div>
          </div>
        </a>
      </div>
    </li>
  );
};
