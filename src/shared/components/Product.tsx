import { ReactNode } from 'react';
import product1 from '../../assets/images/product-1.png';
import product2 from '../../assets/images/product-2.png';
import product3 from '../../assets/images/product-3.png';
import product4 from '../../assets/images/product-4.png';
import ProductEntity from '../../services/ProductService';

interface Props {
  children?: ReactNode;
}

const productData = [
  {
    id: 1,
    name: 'T-Shirt Summer Vibes',
    discount: 30,
    price: 119.99,
    imageUrl: product1,
  },
  {
    id: 2,
    name: 'T-Shirt Summer Vibes',
    discount: 0,
    price: 119.99,
    imageUrl: product2,
  },
  {
    id: 3,
    name: 'T-Shirt Summer Vibes',
    discount: 0,
    price: 79.99,
    imageUrl: product3,
  },
  {
    id: 4,
    name: 'T-Shirt Summer Vibes',
    discount: 0,
    price: 119.99,
    imageUrl: product4,
  },
];

export const Product = ({ children }: Props) => {
  return (
    <section className='section section-product'>
      <div className='container'>
        {children}
        {/* <!-- Product list --> */}
        <div className='product-wrapper'>
          <ul className='product-list row'>
            {productData.map((product: any) => {
              const productEntity = new ProductEntity(product);
              const { id, name, discount, imageUrl, price, status } = productEntity;
              return (
                <li key={id} className='product-item col col-3 col-md-6 col-sm-6'>
                  <div className='product'>
                    <a className='product-link' href='/#'>
                      <img src={imageUrl} alt={name} className='product-image' />
                      <div className='product-status'>
                        <span className='badge badge-outline-primary'>{status ? 'Available' : 'Out of Stock'}</span>
                      </div>
                      <button className='btn btn-primary' data-id={id}>
                        Add to cart
                      </button>
                      {discount ? <span className='badge badge-danger'>{discount}%</span> : null}
                      <div className='product-description'>
                        <h4 className='product-name'>{name}</h4>
                        <div className='product-prices'>
                          <span className={discount ? 'active' : 'sale-price'}>
                            {productEntity.calcDiscountPrice()}
                          </span>
                          <span className='original-price'>{discount ? '$' + price : ''}</span>
                        </div>
                      </div>
                    </a>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};
