import { ProductModel } from '../../app/core/models/product';
import { ProductItem } from './ProductItem';

interface ProductPropTypes {
  productData: ProductModel[];
  setCartItems: (shoppingCart: any) => void;
}

export const ProductList = ({ productData, setCartItems }: ProductPropTypes) => {
  return (
    <ul className="product-list row">
      {/* Product Item */}
      {productData.map((product: ProductModel, index: number) => {
        return <ProductItem key={index} product={product} myKey={product.id} setCartItems={setCartItems} />;
      })}
    </ul>
  );
};
