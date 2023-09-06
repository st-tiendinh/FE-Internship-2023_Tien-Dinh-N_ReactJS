import { useDispatch } from 'react-redux';
import { logout } from '../../redux/actions/user';

interface LogoutModalPropTypes {
  setShowModal: (bool: boolean) => void;
}

export const LogoutModal = ({ setShowModal }: LogoutModalPropTypes) => {
  const dispatch = useDispatch();

  const handleClose = () => {
    setShowModal(false);
  };

  const handleLogout = () => {
    dispatch(logout());
    setShowModal(false);
  };

  return (
    <div className={'modal'}>
      <div className="modal-header">
        <h4 className="modal-title">Logout</h4>
        <span className="modal-close" onClick={handleClose}>
          &times;
        </span>
      </div>
      <div className="modal-logout">
        <h4 className="modal-logout-title text-center">Do you want to logout?</h4>
        <button className="btn btn-primary" type="submit" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};
