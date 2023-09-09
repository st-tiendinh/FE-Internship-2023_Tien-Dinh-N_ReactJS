import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';

import { Popper } from './Popper';

import logo from '../../assets/images/shop-logo.svg';
import mobileLogo from '../../assets/images/mobile-shop-logo.svg';
import { RootState } from '../../redux/reducers/root';
import { CartService } from '../../services/CartService';
import { ModalContext } from '../../app/context/ModalProvider';
import { setShowModal } from '../../redux/actions/modal';
import { logout } from '../../redux/actions/user';
import { setCart } from '../../redux/actions/cart';
import { StorageKey, getFromLocalStorage, removeFromLocalStorage } from '../utils/localStorage';

export const Header = () => {
  const [scrolling, setScrolling] = useState(false);
  const { isShowPopper, setIsShowPopper } = useContext(ModalContext);

  const cart = useSelector((state: RootState) => state.cartList.cartItems);
  const isLogged = useSelector((state: RootState) => state.user.isLogged);
  const dispatch = useDispatch();

  const cartQuantity = new CartService(cart).calcCartAllQuantity();

  const userStore = getFromLocalStorage(StorageKey.User, { id: '', email: '', password: '' });

  const handleLogout = () => {
    dispatch(logout('Logout success'));
    removeFromLocalStorage(StorageKey.User);
    dispatch(setCart([]));
    setIsShowPopper(false);
  };

  const handleClickShowModal = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    if (!isLogged) {
      dispatch(setShowModal());
    } else {
      setIsShowPopper(!isShowPopper);
    }
  };

  const handleClickDirect = () => {
    if (!isLogged) {
      dispatch(setShowModal());
    }
  };

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
    <header className={`header ${scrolling ? 'header-scroll bg-light' : ''}`}>
      <div className="container">
        <div className="header-inner">
          <h1 className="header-logo">
            <Link to="/" className="header-logo-link">
              <img
                src={logo}
                alt="E-Shop"
                className={`logo-img ${scrolling ? 'd-none' : 'd-block'}`}
              />
              <img
                src={mobileLogo}
                alt="E-Shop"
                className={`mobile-logo-img ${scrolling ? 'd-block' : 'd-none'}`}
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

          <ul className={`header-action-list ${scrolling ? 'd-none' : 'd-flex'}`}>
            <li className="header-action-item">
              <a href="/#" className="header-action-link">
                <i className="ic ic-magnifying-glass"></i>
              </a>
            </li>

            <li className="header-action-item">
              <Link to={'/cart'} className="header-action-link" onClick={handleClickDirect}>
                <span className={'header-action-quantity ' + (cartQuantity ? 'd-flex' : 'd-none')}>
                  {cartQuantity}
                </span>
                <i className="ic ic-cart"></i>
              </Link>
            </li>

            <li className="header-action-item">
              <a href="/#" className="header-action-link" onClick={handleClickShowModal}>
                <i className="ic ic-user"></i>
              </a>
              {isShowPopper && <Popper title={userStore?.email} action={handleLogout} />}
            </li>
          </ul>

          <ul className={`header-mobile-action-list ${scrolling ? 'd-flex' : 'd-none'}`}>
            <li className="header-mobile-action-item">
              <a href="/#" className="header-action-link">
                <i className="ic ic-sm-magnifying-glass"></i>
              </a>
            </li>

            <li className="header-mobile-action-item">
              <Link to={'/cart'} className="header-action-link" onClick={handleClickDirect}>
                <span className={'header-action-quantity ' + (cartQuantity ? 'd-flex' : 'd-none')}>
                  {cartQuantity}
                </span>
                <i className="ic ic-sm-cart"></i>
              </Link>
            </li>

            <li className="header-mobile-action-item">
              <a href="/#" className="header-action-link" onClick={handleClickShowModal}>
                <i className="ic ic-sm-user"></i>
              </a>
              {isShowPopper && <Popper title={userStore?.email} action={handleLogout} />}
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
