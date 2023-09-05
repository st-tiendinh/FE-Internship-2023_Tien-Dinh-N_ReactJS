import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { Advertisement, Banner, Newsletter, Product, ServiceDetail } from './containers';
import { fetchProductDataFromApi } from '../../../redux/actions/product';

const Home = () => {
  const dispatch = useDispatch<any>();

  useEffect(() => {
    dispatch(fetchProductDataFromApi());
  }, [dispatch]);

  return (
    <div className="home-page">
      {/* <!-- Banner section --> */}
      <Banner />

      {/* <!-- Advertisement section --> */}
      <Advertisement />

      {/* <!-- Products section --> */}
      <Product>
        <div className="section-product-header">
          <h3 className="section-title">Selected just for you</h3>
          <a href="/#" className="btn btn-outline btn-sm-outline">
            SHOW MORE
          </a>
        </div>
      </Product>

      {/* <!-- Service detail --> */}
      <ServiceDetail />

      {/* <!-- Product in today --> */}
      <Product>
        <h3 className="section-title">Products in today</h3>
      </Product>

      {/* <!-- Newsletter --> */}
      <Newsletter />
    </div>
  );
};

export default Home;
