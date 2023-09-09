import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/reducers/root';
import { setConfirmModal, setHideModal } from '../../redux/actions/modal';

export const Confirm = ({ action }: any) => {
  const isShow = useSelector((state: RootState) => state.modal.isShow);
  const dispatch = useDispatch();

  const handleConfirm = () => {
    dispatch(setConfirmModal(action()));
  };

  const handleCancel = () => {
    dispatch(setHideModal());
  };

  return (
    <div className={`confirm-wrapper ${isShow ? 'd-flex' : 'd-none'} `}>
      <button className="btn btn-normal-primary" onClick={handleConfirm}>
        Yes
      </button>
      <button className="btn btn-normal-outline-primary" onClick={handleCancel}>
        Cancel
      </button>
    </div>
  );
};
