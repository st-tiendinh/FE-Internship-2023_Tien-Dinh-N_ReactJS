import { ProductInterface } from '../../app/core/models/product';
import { Banner, Advertisement, Newsletter, Service, ProductItem } from '../../shared/components';

interface HomePropsInterface {
  productData: ProductInterface[];
  addToCart: (id: number, productData: ProductInterface) => void;
}

const Home = ({ productData, addToCart }: HomePropsInterface) => {
  return (
    <div className='home-page'>
      {/* <!-- Banner section --> */}
      <Banner />

      {/* <!-- Advertisement section --> */}
      <Advertisement />

      {/* <!-- Products section --> */}
      <section className='section section-product'>
        <div className='container'>
          <div className='section-product-header'>
            <h3 className='section-title'>Selected just for you</h3>
            <a href='/#' className='btn btn-outline btn-sm-outline'>
              SHOW MORE
            </a>
          </div>
          {/* Product list */}
          <div className='product-wrapper'>
            <ul className='product-list row'>
              {/* Product Item */}
              {productData.map((product: ProductInterface, index: number) => {
                return <ProductItem key={index} product={product} myKey={product.id} addToCart={addToCart} />;
              })}
            </ul>
          </div>
        </div>
      </section>

      {/* <!-- Service detail --> */}
      <Service />

      {/* <!-- Product in today --> */}
      <section className='section section-product'>
        <div className='container'>
          <h3 className='section-title'>Products in today</h3>
          {/* Product list */}
          <div className='product-wrapper'>
            <ul className='product-list row'>
              {/* Product Item */}
              {productData.map((product: ProductInterface, index: number) => {
                return <ProductItem key={index} product={product} myKey={product.id} addToCart={addToCart} />;
              })}
            </ul>
          </div>
        </div>
      </section>

      {/* <!-- Newsletter --> */}
      <Newsletter />
    </div>
  );
};

export default Home;
