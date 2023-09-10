import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../../redux/reducers/root';
import { setShowToast } from '../../redux/actions/user';
import { useEffect } from 'react';

interface ToastPropTypes {
  message: string;
}

export const Toast = ({ message }: ToastPropTypes) => {
  const isShowMessage = useSelector((state: RootState) => state.user.isShowMessage);
  const dispatch = useDispatch();

  const handleCloseToast = () => {
    dispatch(setShowToast(false));
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(setShowToast(false));
      return () => clearTimeout(timer);
    }, 4100);
  }, [dispatch]);

  return (
    <div className={`toast${isShowMessage ? ' toast-show' : ''}`}>
      <i className="ic ic-success"></i>
      <p className="toast-message">{message}</p>
      <span onClick={handleCloseToast} className="toast-close-btn">
        &times;
      </span>
    </div>
  );
};
