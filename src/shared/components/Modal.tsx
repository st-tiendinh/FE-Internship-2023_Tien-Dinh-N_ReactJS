import { useDispatch, useSelector } from 'react-redux';
import { ReactElement, useEffect } from 'react';

import { RootState } from '../../redux/reducers/root';
import { LoginForm } from './LoginForm';
import { Confirm } from './Confirm';
import { setHideModal, setShowModal } from '../../redux/actions/modal';

export enum ModalType {
  LOGIN,
  CONFIRM,
  CHECKOUT,
}

interface ModalPropTypes {
  type: ModalType;
  title: string;
  action?: any;
  button?: ReactElement;
}

export const Modal = ({ title, button, type, action }: ModalPropTypes) => {
  const error = useSelector((state: RootState) => state.user.error);
  const isShow = useSelector((state: RootState) => state.modal.isShow);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(setHideModal());
  };

  useEffect(() => {
    !!error ? dispatch(setShowModal()) : dispatch(setHideModal());
  }, [dispatch, error]);

  // Handle loggin xong se chuyen sang trang cart

  return (
    <div className={`modal-wrapper ${isShow ? 'd-block' : 'd-none'}`}>
      <div className="modal">
        <div className="modal-header">
          <h4 className="modal-title">{title}</h4>
          <span className="modal-close" onClick={handleClose}>
            &times;
          </span>
        </div>
        <div className="modal-body">
          {(type === ModalType.LOGIN && <LoginForm />) ||
            (type === ModalType.CONFIRM && <Confirm action={action} />)}
        </div>
        <div className="modal-footer">{button}</div>
      </div>
    </div>
  );
};
