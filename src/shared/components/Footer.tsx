import logo from '../../assets/images/shop-logo.svg';

export const Footer = () => {
  return (
    <footer className='footer'>
      <div className='main-footer'>
        <div className='container'>
          <div className='row'>
            <div className='main-footer-info col col-6 col-md-6 col-sm-12'>
              <div className='shop-logo'>
                <a href='/#' className='shop-logo-link'>
                  <img src={logo} alt='E-Shop logo' className='shop-logo-img' />
                </a>
              </div>

              <p className='main-footer-desc'>
                House My Brand designs clothing for the young, the old &everyone in between – but most importantly, for
                the fashionable
              </p>

              <ul className='social-list'>
                <li className='social-item'>
                  <a className='social-link' href='/#'>
                    <i className='ic ic-facebook'></i>
                  </a>
                </li>
                <li className='social-item'>
                  <a className='social-link' href='/#'>
                    <i className='ic ic-twitter'></i>
                  </a>
                </li>
                <li className='social-item'>
                  <a className='social-link' href='/#'>
                    <i className='ic ic-linkedin'></i>
                  </a>
                </li>
                <li className='social-item'>
                  <a className='social-link' href='/#'>
                    <i className='ic ic-instagram'></i>
                  </a>
                </li>
                <li className='social-item'>
                  <a className='social-link' href='/#'>
                    <i className='ic ic-youtube'></i>
                  </a>
                </li>
              </ul>
            </div>

            <div className='col col-6 col-md-12 col-sm-12'>
              <ul className='reference-list row'>
                <li className='reference-item col col-4 col-sm-12'>
                  <div className='reference'>
                    <p className='reference-title'>Shopping online</p>
                    <ul className='reference-sub-list'>
                      <li className='reference-sub-item'>
                        <a className='reference-link' href='/#'>
                          Order Status
                        </a>
                      </li>
                      <li className='reference-sub-item'>
                        <a className='reference-link' href='/#'>
                          Shipping and Delivery
                        </a>
                      </li>
                      <li className='reference-sub-item'>
                        <a className='reference-link' href='/#'>
                          Returns
                        </a>
                      </li>
                      <li className='reference-sub-item'>
                        <a className='reference-link' href='/#'>
                          Payment Options
                        </a>
                      </li>
                      <li className='reference-sub-item'>
                        <a className='reference-link' href='/#'>
                          Contact Us
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>

                <li className='reference-item col col-4 col-sm-12'>
                  <div className='reference'>
                    <p className='reference-title'>Infomation</p>
                    <ul className='reference-sub-list'>
                      <li className='reference-sub-item'>
                        <a className='reference-link' href='/#'>
                          Gift Cards
                        </a>
                      </li>
                      <li className='reference-sub-item'>
                        <a className='reference-link' href='/#'>
                          Find a store
                        </a>
                      </li>
                      <li className='reference-sub-item'>
                        <a className='reference-link' href='/#'>
                          Bacome a member
                        </a>
                      </li>
                      <li className='reference-sub-item'>
                        <a className='reference-link' href='/#'>
                          Site
                        </a>
                      </li>
                      <li className='reference-sub-item'>
                        <a className='reference-link' href='/#'>
                          feedback
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>

                <li className='reference-item col col-4 col-sm-12'>
                  <div className='reference'>
                    <p className='reference-title'>Contact</p>
                    <ul className='reference-sub-list'>
                      <li className='reference-sub-item'>
                        <a className='reference-link' href='/#'>
                          store@uikit.com{' '}
                        </a>
                      </li>
                      <li className='reference-sub-item'>
                        <a className='reference-link' href='/#'>
                          Hotline: +1 131 138 138{' '}
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className='sub-footer'>
        <p className='copy-right'>DESIGN BY ICEO.CO - © 2019. ALL RIGHTS RESERVED.</p>
      </div>
    </footer>
  );
};
