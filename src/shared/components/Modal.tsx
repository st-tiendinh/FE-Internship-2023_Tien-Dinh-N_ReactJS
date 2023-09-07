import { useContext, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../../redux/reducers/root';
import { ModalContext } from '../../app/context/ModalProvider';
import { Spinner } from './Spinner';
import { login } from '../../redux/actions/user';

export const Modal = () => {
  const [isShowPassWord, setIsShowPassWord] = useState(false);
  const loading = useSelector((state: RootState) => state.user.isLoading);
  const error = useSelector((state: RootState) => state.user.error);

  const { isShowModal, setIsShowModal } = useContext(ModalContext);
  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch<any>();

  const handleClose = () => {
    setIsShowModal(false);
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    dispatch(login(emailInputRef.current!.value.trim(), passwordInputRef.current!.value.trim()));
  };

  const handleShowPassWord = () => {
    setIsShowPassWord(!isShowPassWord);
  };

  useEffect(() => {
    setIsShowModal(!!error);
  }, [error, setIsShowModal]);

  return (
    <div className={`modal-wrapper ${isShowModal ? 'd-block' : 'd-none'}`}>
      <div className="modal">
        <div className="modal-header">
          <h4 className="modal-title">Login</h4>
          <span className="modal-close" onClick={handleClose}>
            &times;
          </span>
        </div>
        <form className="modal-form" onSubmit={handleSubmit}>
          <div className="modal-email">
            <label htmlFor="email" className="modal-label">
              Email
            </label>
            <input
              type="email"
              ref={emailInputRef}
              id="email"
              className="modal-input"
              placeholder="Enter your email..."
            />
          </div>
          <div className="modal-password">
            <label htmlFor="password" className="modal-label">
              Password
            </label>
            <input
              type={isShowPassWord ? 'text' : 'password'}
              ref={passwordInputRef}
              id="password"
              className="modal-input"
              placeholder="Enter your password..."
            />
            <span className="modal-toggle-show-btn" onClick={handleShowPassWord}>
              {isShowPassWord ? 'Hide' : 'Show'}
            </span>
          </div>

          <button className="btn btn-primary" type="submit">
            Login
          </button>
        </form>
        {loading ? <Spinner /> : ''}
      </div>
    </div>
  );
};
