import { useContext } from 'react';
import { ProductModel } from '../../app/core/models/product';
import { ProductItem } from './ProductItem';
import { CartContext } from '../../app/core/contexts/CartContext';

export const ProductList = () => {
  const context = useContext(CartContext);
  return (
    <ul className="product-list row">
      {/* Product Item */}
      {context.productData.map((product: ProductModel, index: number) => {
        return <ProductItem key={index} product={product} myKey={product.id} />;
      })}
    </ul>
  );
};
