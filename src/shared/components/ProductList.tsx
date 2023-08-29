import { ProductInterface } from '../../app/core/models/product';
import { ProductItem } from './ProductItem';

interface ProductPropTypes {
  productData: ProductInterface[];
  setCartItems: (shoppingCart: any) => void;
}

export const ProductList = ({ productData, setCartItems }: ProductPropTypes) => {
  return (
    <ul className="product-list row">
      {/* Product Item */}
      {productData.map((product: ProductInterface, index: number) => {
        return <ProductItem key={index} product={product} myKey={product.id} setCartItems={setCartItems} />;
      })}
    </ul>
  );
};
