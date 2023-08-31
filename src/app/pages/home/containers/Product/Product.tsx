import { ReactElement } from 'react';
import { ProductList } from '../../../../../shared/components';

interface ProductPropTypes {
  children: ReactElement;
}

export const Product = ({ children }: ProductPropTypes) => {
  return (
    <section className="section section-product">
      <div className="container">
        {children}
        {/* Product list */}
        <ProductList />
      </div>
    </section>
  );
};
