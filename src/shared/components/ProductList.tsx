import { useSelector } from 'react-redux';

import { ProductItem } from './ProductItem';
import { Error } from './Error';
import { ProductProps } from '../../app/core/models/product';

interface ProductListPropTypes {
  productData: ProductProps[];
}

export const ProductList = ({ productData }: ProductListPropTypes) => {
  const loading = useSelector((state: any) => state.productList.loading);
  const error = useSelector((state: any) => state.productList.error);

  return (
    <ul className="product-list row">
      {error ? (
        <Error />
      ) : loading ? (
        Array.from({ length: 4 }, (_, index) => (
          <li key={index} className="col col-3 col-md-6 col-sm-6">
            <div className="skeleton"></div>
          </li>
        ))
      ) : (
        productData.map((item: ProductProps) => <ProductItem key={item.id} productItem={item} />)
      )}
    </ul>
  );
};
