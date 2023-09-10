import { Link } from 'react-router-dom';

export enum PopperType {
  LOG_OUT,
}

interface PopperPropTypes {
  action: any;
  title: string;
  type: PopperType;
}

export const Popper = ({ action, title, type }: PopperPropTypes) => {
  return (
    <div className="popper-wrapper">
      {type === PopperType.LOG_OUT && (
        <ul className="popper-list">
          <li className="popper-item">{title}</li>
          <li className="popper-item">
            <Link to="/">
              <button className="btn btn-normal-outline-primary" onClick={action}>
                Logout
              </button>
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};
