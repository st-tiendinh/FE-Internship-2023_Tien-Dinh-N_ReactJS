import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ProductItem } from './ProductItem';

import { ProductProps } from '../../app/core/models/product';
import { fetchProductDataFromApi } from '../../redux/actions/productActions';
import { ProductService } from '../../services/ProductService';

export const ProductList = () => {
  const product = useSelector((state: any) => state.productList.productItems);
  const dispatch = useDispatch<any>();
  const productData = product.map((item: ProductProps) => new ProductService(item));

  useEffect(() => {
    dispatch(fetchProductDataFromApi());
  }, [dispatch]);

  return (
    <ul className="product-list row">
      {productData.map((product: ProductProps, index: number) => {
        return <ProductItem key={index} product={product} />;
      })}
    </ul>
  );
};
