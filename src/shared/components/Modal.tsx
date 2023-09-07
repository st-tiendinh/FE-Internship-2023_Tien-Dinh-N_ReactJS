import { useSelector } from 'react-redux';
import { ReactElement, ReactNode, useContext, useEffect } from 'react';

import { RootState } from '../../redux/reducers/root';
import { ModalContext } from '../../app/context/ModalProvider';

interface ModalPropTypes {
  title: string;
  children?: ReactNode;
  button?: ReactElement;
  content?: string;
}

export const Modal = ({ children, title, button, content }: ModalPropTypes) => {
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
        <div className="modal-body">{children || content}</div>
        <div className="modal-footer">{button}</div>
      </div>
    </div>
  );
};
