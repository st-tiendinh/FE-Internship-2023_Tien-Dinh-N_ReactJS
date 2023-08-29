import { ProductInterface } from '../../../app/core/models/product';
import { Advertisement, Banner, Newsletter, Product } from './containers';
import { Service } from './containers/Service/Service';

interface HomePropTypes {
  productData: ProductInterface[];
  setCartItems: (shoppingCart: any) => void;
}

const Home = ({ productData, setCartItems }: HomePropTypes) => {
  return (
    <div className="home-page">
      {/* <!-- Banner section --> */}
      <Banner />

      {/* <!-- Advertisement section --> */}
      <Advertisement />

      {/* <!-- Products section --> */}
      <Product productData={productData} setCartItems={setCartItems}>
        <div className="section-product-header">
          <h3 className="section-title">Selected just for you</h3>
          <a href="/#" className="btn btn-outline btn-sm-outline">
            SHOW MORE
          </a>
        </div>
      </Product>

      {/* <!-- Service detail --> */}
      <Service />

      {/* <!-- Product in today --> */}
      <Product productData={productData} setCartItems={setCartItems}>
        <h3 className="section-title">Products in today</h3>
      </Product>

      {/* <!-- Newsletter --> */}
      <Newsletter />
    </div>
  );
};

export default Home;
