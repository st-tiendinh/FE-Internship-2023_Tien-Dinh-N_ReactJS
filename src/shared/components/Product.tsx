import { ReactElement } from 'react';
import { ProductInterface } from '../../app/core/models/product';
import { ProductItem } from './ProductItem';

interface ProductPropTypes {
  productData: ProductInterface[];
  setCartItems: (shoppingCart: any) => void;
  children: ReactElement;
}

export const Product = ({ productData, setCartItems, children }: ProductPropTypes) => {
  return (
    <section className='section section-product'>
      <div className='container'>
        {children}
        {/* Product list */}
        <ul className='product-list row'>
          {/* Product Item */}
          {productData.map((product: ProductInterface, index: number) => {
            return <ProductItem key={index} product={product} myKey={product.id} setCartItems={setCartItems} />;
          })}
        </ul>
      </div>
    </section>
  );
};
