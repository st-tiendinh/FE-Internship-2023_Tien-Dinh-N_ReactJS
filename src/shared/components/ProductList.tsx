import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ProductItem } from './ProductItem';

import { ProductModel } from '../../app/core/models/product';
import { fetchProductApi } from '../../redux/actions/productActions';
import { ProductService } from '../../services/ProductService';

export const ProductList = () => {
  const product = useSelector((state: any) => state.productList.productItems);
  const dispatch = useDispatch<any>();
  const productData = product.map((item: ProductModel) => new ProductService(item));

  useEffect(() => {
    dispatch(fetchProductApi());
  }, [dispatch]);

  return (
    <ul className="product-list row">
      {productData.map((product: ProductModel, index: number) => {
        return <ProductItem key={index} product={product} />;
      })}
    </ul>
  );
};
