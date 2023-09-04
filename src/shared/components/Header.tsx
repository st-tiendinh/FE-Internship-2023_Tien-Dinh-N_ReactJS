import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

import logo from '../../assets/images/shop-logo.svg';
import mobileLogo from '../../assets/images/mobile-shop-logo.svg';

import { CartService } from '../../services/CartService';
import { RootState } from '../../redux/reducers/rootReducer';

export const Header = () => {
  const [scrolling, setScrolling] = useState(false);
  const location = useLocation();
  const cart = useSelector((state: RootState) => state.cartList.cartItems);
  const cartQuantity = new CartService(cart).calcCartAllQuantity();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 90) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={
        'header ' +
        (location.pathname === '/cart' ? 'header-scroll bg-dark mt-0' : '') +
        (scrolling ? 'header-scroll bg-light' : '')
      }
    >
      <div className="container">
        <div className="header-inner">
          <h1 className="header-logo">
            <Link to="/" className="header-logo-link">
              <img
                src={logo}
                alt="E-Shop"
                className={'logo-img ' + (scrolling ? 'd-none' : 'd-block')}
              />
              <img
                src={mobileLogo}
                alt="E-Shop"
                className={'mobile-logo-img ' + (scrolling ? 'd-block' : 'd-none')}
              />
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

          <ul className={'header-action-list ' + (scrolling ? 'd-none' : 'd-flex')}>
            <li className="header-action-item">
              <a href="/#" className="header-action-link">
                <i className="ic ic-magnifying-glass"></i>
              </a>
            </li>
            <li className="header-action-item">
              <Link to="/cart" className="header-action-link">
                <span className={'header-action-quantity ' + (cartQuantity ? 'd-flex' : 'd-none')}>
                  {cartQuantity}
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

          <ul className={'header-mobile-action-list ' + (scrolling ? 'd-flex' : 'd-none')}>
            <li className="header-mobile-action-item">
              <a href="/#" className="header-action-link">
                <i className="ic ic-sm-magnifying-glass"></i>
              </a>
            </li>
            <li className="header-mobile-action-item">
              <Link to="/cart" className="header-action-link">
                <span className={'header-action-quantity ' + (cartQuantity ? 'd-flex' : 'd-none')}>
                  {cartQuantity}
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
