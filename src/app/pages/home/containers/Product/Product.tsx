import { ReactElement } from 'react';
import { ProductModel } from '../../../../core/models/product';
import { ProductList } from '../../../../../shared/components';

interface ProductPropTypes {
  productData: ProductModel[];
  setCartItems: (shoppingCart: any) => void;
  children: ReactElement;
}

export const Product = ({ productData, setCartItems, children }: ProductPropTypes) => {
  return (
    <section className="section section-product">
      <div className="container">
        {children}
        {/* Product list */}
        <ProductList productData={productData} setCartItems={setCartItems} />
      </div>
    </section>
  );
};
