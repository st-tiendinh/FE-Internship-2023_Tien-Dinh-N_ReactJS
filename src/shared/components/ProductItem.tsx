import { ProductInterface } from '../../app/core/models/product';
import { ProductEntity } from '../../services/ProductService';

interface ProductItemPropTypes {
  myKey: number;
  product: ProductInterface;
  onClickAddToCart: (id: number, productEntity: ProductInterface) => void;
}

export const ProductItem = ({ myKey, product, onClickAddToCart }: ProductItemPropTypes) => {
  const productEntity = new ProductEntity(product);
  const { id, name, discount, imageUrl, price, status } = productEntity;

  return (
    <li key={myKey} className='product-item col col-3 col-md-6 col-sm-6'>
      <div className='product'>
        <a className='product-link' href='/#' onClick={(e) => e.preventDefault()}>
          <img src={imageUrl} alt={name} className='product-image' />
          <div className='product-status'>
            <span className='badge badge-outline-primary'>{status ? 'Available' : 'Out of Stock'}</span>
          </div>
          <button
            className='btn btn-primary'
            onClick={(e) => {
              e.preventDefault();
              onClickAddToCart(id, productEntity);
            }}
            disabled={status ? false : true}
          >
            Add to cart
          </button>
          {discount ? <span className='badge badge-danger'>{discount}%</span> : null}
          <div className='product-description'>
            <h4 className='product-name'>{name}</h4>
            <div className='product-prices'>
              <span className={discount ? 'sale-price active' : 'sale-price'}>{productEntity.calcDiscountPrice()}</span>
              <span className='original-price'>{discount ? '$' + price : ''}</span>
            </div>
          </div>
        </a>
      </div>
    </li>
  );
};
