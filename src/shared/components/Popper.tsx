import { useContext } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { StorageKey, getFromLocalStorage, removeFromLocalStorage } from '../utils/localStorage';
import { logout } from '../../redux/actions/user';
import { ModalContext } from '../../app/context/ModalProvider';
import { setCart } from '../../redux/actions/cart';

export const Popper = () => {
  const { setIsShowPopper } = useContext(ModalContext);
  const dispatch = useDispatch();
  const userStore = getFromLocalStorage(StorageKey.User, { id: '', email: '', password: '' });

  const handleLogout = () => {
    dispatch(logout());
    removeFromLocalStorage(StorageKey.User);
    dispatch(setCart([]));
    setIsShowPopper(false);
  };

  return (
    <div className="popper-wrapper">
      <ul className="popper-list">
        <li className="popper-item">{userStore?.email}</li>
        <li className="popper-item">
          <Link to="/">
            <button className="btn btn-outline-primary" onClick={handleLogout}>
              Logout
            </button>
          </Link>
        </li>
      </ul>
    </div>
  );
};
