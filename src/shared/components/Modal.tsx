import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { LoginModal } from './LoginModal';
import { RootState } from '../../redux/reducers/root';
import { LogoutModal } from './LogoutModal';

export const Modal = ({ showModal, setShowModal }: any) => {
  const loading = useSelector((state: RootState) => state.user.isLoading);
  const error = useSelector((state: RootState) => state.user.error);
  const isLogged = useSelector((state: RootState) => state.user.isLogged);

  useEffect(() => {
    setShowModal(!!error);
  }, [error, setShowModal]);

  return (
    <div className={showModal ? 'modal-wrapper d-block' : 'modal-wrapper d-none'}>
      {loading ? (
        <div className="modal">
          <div className="skeleton"></div>
        </div>
      ) : isLogged ? (
        <LogoutModal setShowModal={setShowModal} />
      ) : (
        <LoginModal setShowModal={setShowModal} />
      )}
    </div>
  );
};
