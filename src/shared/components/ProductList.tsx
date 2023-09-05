import { ProductItem } from './ProductItem';

import { ProductProps } from '../../app/core/models/product';

interface ProductListPropTypes {
  productData: ProductProps[];
}

export const ProductList = ({ productData }: ProductListPropTypes) => {
  return (
    <ul className="product-list row">
      {productData.map((item: ProductProps) => {
        return <ProductItem key={item.id} productItem={item} />;
      })}
    </ul>
  );
};
