import { Link } from 'react-router-dom';

export const Popper = ({ action, title }: any) => {
  return (
    <div className="popper-wrapper">
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
    </div>
  );
};
