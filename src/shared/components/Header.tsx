import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import logo from '../../assets/images/shop-logo.svg';
import mobileLogo from '../../assets/images/mobile-shop-logo.svg';

import { CartService } from '../../services/CartService';

import { StateInterface } from '../../redux/reducer';

export const Header = () => {
  const cart = useSelector((state: StateInterface) => state.cart);

  return (
    <header className="header bg-dark mt-0">
      <div className="container">
        <div className="header-inner">
          <h1 className="header-logo">
            <Link to="/" className="header-logo-link">
              <img src={logo} alt="E-Shop" className="logo-img" />
              <img src={mobileLogo} alt="E-Shop" className="mobile-logo-img" />
            </Link>
          </h1>

          <nav className="nav">
            <ul className="nav-list">
              <li className="nav-item">
                <a className="nav-link" href="#men">
                  Men
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#woman">
                  Women
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#kids">
                  Kids
                </a>
              </li>
            </ul>
          </nav>

          <ul className="header-action-list">
            <li className="header-action-item">
              <a href="/#" className="header-action-link">
                <i className="ic ic-magnifying-glass"></i>
              </a>
            </li>
            <li className="header-action-item">
              <Link to="/cart" className="header-action-link">
                <span className="header-action-quantity" style={{ display: 'flex' }}>
                  {new CartService(cart).calcCartAllQuantity()}
                </span>
                <i className="ic ic-cart"></i>
              </Link>
            </li>
            <li className="header-action-item">
              <a href="/#" className="header-action-link">
                <i className="ic ic-user"></i>
              </a>
            </li>
          </ul>

          <ul className="header-mobile-action-list">
            <li className="header-mobile-action-item">
              <a href="/#" className="header-action-link">
                <i className="ic ic-sm-magnifying-glass"></i>
              </a>
            </li>
            <li className="header-mobile-action-item">
              <Link to="/cart" className="header-action-link">
                <span className="header-action-quantity" style={{ display: 'flex' }}>
                  {new CartService(cart).calcCartAllQuantity()}
                </span>
                <i className="ic ic-sm-cart"></i>
              </Link>
            </li>
            <li className="header-mobile-action-item">
              <a href="/#" className="header-action-link">
                <i className="ic ic-sm-user"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
