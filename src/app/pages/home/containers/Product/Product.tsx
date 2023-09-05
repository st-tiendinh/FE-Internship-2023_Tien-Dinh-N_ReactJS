import { ReactElement } from 'react';
import { ProductList } from '../../../../../shared/components';
import { useSelector } from 'react-redux';
import { ProductProps } from '../../../../core/models/product';
import { ProductService } from '../../../../../services/ProductService';

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
