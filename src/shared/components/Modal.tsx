import { useContext, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../../redux/reducers/root';
import { ModalContext } from '../../app/context/ModalProvider';
import { Spinner } from './Spinner';
import { login } from '../../redux/actions/user';

export const Modal = () => {
  const loading = useSelector((state: RootState) => state.user.isLoading);
  const error = useSelector((state: RootState) => state.user.error);

  const { showModal, setShowModal } = useContext(ModalContext);
  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch<any>();

  const handleClose = () => {
    setShowModal(false);
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    dispatch(login(emailInputRef.current!.value.trim(), passwordInputRef.current!.value.trim()));
  };

  useEffect(() => {
    setShowModal(!!error);
  }, [error, setShowModal]);

  return (
    <div className={`modal-wrapper ${showModal ? 'd-block' : 'd-none'}`}>
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
              type="text"
              ref={passwordInputRef}
              id="password"
              className="modal-input"
              placeholder="Enter your password..."
            />
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
