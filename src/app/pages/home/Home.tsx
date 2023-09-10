import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Modal, Toast } from '../../../shared/components';
import { Advertisement, Banner, Newsletter, Product, ServiceDetail } from './containers';

import { RootState } from '../../../redux/reducers/root';
import { setHideModal } from '../../../redux/actions/modal';
import { ModalType } from '../../../shared/components/Modal';
import { setShowToast } from '../../../redux/actions/user';

const Home = () => {
  const isShowMessage = useSelector((state: RootState) => state.user.isShowMessage);
  const isLoading = useSelector((state: RootState) => state.user.isLoading);
  const isLogged = useSelector((state: RootState) => state.user.isLogged);
  const error = useSelector((state: RootState) => state.user.error);
  const message = useSelector((state: RootState) => state.user.message);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isLoading && isLogged && !error) {
      dispatch(setHideModal());
    }
  }, [dispatch, error, isLoading, isLogged]);

  useEffect(() => {
    dispatch(setShowToast(isShowMessage));
  }, [dispatch, isLogged, isShowMessage]);

  return (
    <div className="home-page">
      {/* Toast */}
      <Toast message={message} />

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
