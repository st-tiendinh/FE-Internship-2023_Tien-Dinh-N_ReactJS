import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/actions/user';

interface LoginModalPropTypes {
  setShowModal: (bool: boolean) => void;
}

export const LoginModal = ({ setShowModal }: LoginModalPropTypes) => {
  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch<any>();

  const handleClose = () => {
    setShowModal(false);
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    dispatch(login(emailInputRef.current!.value.trim(), passwordInputRef.current!.value.trim()));
    setShowModal(false);
  };

  return (
    <div className={'modal'}>
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
    </div>
  );
};
