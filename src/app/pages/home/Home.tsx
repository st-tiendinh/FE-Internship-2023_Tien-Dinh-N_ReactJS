import { useSelector } from 'react-redux';

import { Advertisement, Banner, Newsletter, Product, ServiceDetail } from './containers';
import { LoginForm, Modal, Spinner } from '../../../shared/components';

import { RootState } from '../../../redux/reducers/root';

const Home = () => {
  const loading = useSelector((state: RootState) => state.user.isLoading);

  return (
    <div className="home-page">
      {/* Modal */}
      <Modal title="Login">
        <LoginForm />
        {loading ? <Spinner /> : ''}
      </Modal>

      {/* Banner section */}
      <Banner />

      {/* Advertisement section */}
      <Advertisement />

      {/* Products section */}
      <Product>
        <div className="section-product-header">
          <h3 className="section-title">Selected just for you</h3>
          <a href="/#" className="btn btn-outline btn-sm-outline">
            SHOW MORE
          </a>
        </div>
      </Product>

      {/* Service detail */}
      <ServiceDetail />

      {/* Product in today */}
      <Product>
        <h3 className="section-title">Products in today</h3>
      </Product>

      {/* Newsletter */}
      <Newsletter />
    </div>
  );
};

export default Home;
