import { useDispatch, useSelector } from 'react-redux';

import { Advertisement, Banner, Newsletter, Product, ServiceDetail } from './containers';
import { Modal, Toast } from '../../../shared/components';

import { RootState } from '../../../redux/reducers/root';
import { setShowToast } from '../../../redux/actions/user';
import { ModalType } from '../../../shared/components/Modal';
import { useEffect } from 'react';
import { setHideModal } from '../../../redux/actions/modal';

const Home = () => {
  const isShowMessage = useSelector((state: RootState) => state.user.isShowMessage);
  const isLoading = useSelector((state: RootState) => state.user.isLoading);
  const message = useSelector((state: RootState) => state.user.message);
  const dispatch = useDispatch();

  const handleCloseToast = () => {
    dispatch(setShowToast(false));
  };

  useEffect(() => {
    if (!isLoading) {
      dispatch(setHideModal());
    }
  }, [dispatch, isLoading]);

  return (
    <div className="home-page">
      {/* Toast */}
      {isShowMessage && <Toast message={message} onClose={handleCloseToast} />}

      {/* Modal */}
      <Modal title="Login" type={ModalType.LOGIN} />

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
