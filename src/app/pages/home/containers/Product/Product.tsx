import { useSelector } from 'react-redux';
import { ReactElement } from 'react';

import { ProductList } from '../../../../../shared/components';

import { ProductService } from '../../../../../services/ProductService';
import { ProductProps } from '../../../../core/models/product';

interface ProductPropTypes {
  children: ReactElement;
}

export const Product = ({ children }: ProductPropTypes) => {
  const product = useSelector((state: any) => state.productList.productItems);
  const productData = product.map((item: ProductProps) => new ProductService(item));

  return (
    <section className="section section-product">
      <div className="container">
        {children}
        <ProductList productData={productData} />
      </div>
    </section>
  );
};
