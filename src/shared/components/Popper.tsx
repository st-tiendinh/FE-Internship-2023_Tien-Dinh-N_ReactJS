import { useDispatch, useSelector } from 'react-redux';

import { StorageKey } from '../utils/localStorage';
import { logout } from '../../redux/actions/user';
import { RootState } from '../../redux/reducers/root';

export const Popper = () => {
  const userStore = useSelector((state: RootState) => state.user.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem(StorageKey.User);
  };

  return (
    <div className={`popper-wrapper ${userStore ? 'd-block' : 'd-none'}`}>
      <ul className="popper-list">
        <li className="popper-item">{userStore?.email}</li>
        <li className="popper-item">
          <button className="btn btn-outline-primary" onClick={handleLogout}>
            Logout
          </button>
        </li>
      </ul>
    </div>
  );
};
