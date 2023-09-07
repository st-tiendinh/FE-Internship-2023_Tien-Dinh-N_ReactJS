import { useSelector } from 'react-redux';
import { ReactNode, useContext, useEffect } from 'react';

import { RootState } from '../../redux/reducers/root';
import { ModalContext } from '../../app/context/ModalProvider';
import { Spinner } from './Spinner';

interface ModalPropTypes {
  children: ReactNode;
  title: string;
}

export const Modal = ({ children, title }: ModalPropTypes) => {
  const loading = useSelector((state: RootState) => state.user.isLoading);
  const error = useSelector((state: RootState) => state.user.error);

  const { isShowModal, setIsShowModal } = useContext(ModalContext);

  const handleClose = () => {
    setIsShowModal(false);
  };

  useEffect(() => {
    setIsShowModal(!!error);
  }, [error, setIsShowModal]);

  // Handle loggin xong se chuyen sang trang cart

  return (
    <div className={`modal-wrapper ${isShowModal ? 'd-block' : 'd-none'}`}>
      <div className="modal">
        <div className="modal-header">
          <h4 className="modal-title">{title}</h4>
          <span className="modal-close" onClick={handleClose}>
            &times;
          </span>
        </div>

        <div className="modal-body">{children}</div>
        <div className="modal-footer">{loading ? <Spinner /> : ''}</div>
      </div>
    </div>
  );
};
