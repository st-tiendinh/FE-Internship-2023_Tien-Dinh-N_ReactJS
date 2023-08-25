// import logo from '../../assets/images/shop-logo.svg'
// import mobileLogo from '../assets/images/mobile-shop-logo.svg'
import logo from '../../assets/images/shop-logo.svg'
import mobileLogo from '../../assets/images/mobile-shop-logo.svg'

export const Header = () => {
  return (
    <header className='header'>
      <div className='container'>
        <div className='header-inner'>
          <h1 className='header-logo'>
            <a href='/#' className='header-logo-link'>
              <img src={logo} alt='E-Shop' className='logo-img' />
              <img src={mobileLogo} alt='E-Shop' className='mobile-logo-img' />
            </a>
          </h1>

          <nav className='nav'>
            <ul className='nav-list'>
              <li className='nav-item'>
                <a className='nav-link' href='#men'>
                  Men
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#woman'>
                  Women
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#kids'>
                  Kids
                </a>
              </li>
            </ul>
          </nav>

          <ul className='header-action-list'>
            <li className='header-action-item'>
              <a href='/#' className='header-action-link'>
                <i className='ic ic-magnifying-glass'></i>
              </a>
            </li>
            <li className='header-action-item'>
              <a href='cart.html' className='header-action-link'>
                <span className='header-action-quantity'></span>
                <i className='ic ic-cart'></i>
              </a>
            </li>
            <li className='header-action-item'>
              <a href='/#' className='header-action-link'>
                <i className='ic ic-user'></i>
              </a>
            </li>
          </ul>

          <ul className='header-mobile-action-list'>
            <li className='header-mobile-action-item'>
              <a href='/#' className='header-action-link'>
                <i className='ic ic-sm-magnifying-glass'></i>
              </a>
            </li>
            <li className='header-mobile-action-item'>
              <a href='cart.html' className='header-action-link'>
                <span className='header-action-quantity'></span>
                <i className='ic ic-sm-cart'></i>
              </a>
            </li>
            <li className='header-mobile-action-item'>
              <a href='/#' className='header-action-link'>
                <i className='ic ic-sm-user'></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
