export const Banner = () => {
  return (
    <section className="section section-banner">
      <div className="banner">
        <h2 className="banner-title">
          Sale of the <br />
          <span className="text-primary">summer</span> <br />
          collection
        </h2>
        <div className="banner-link-wrapper">
          <span className="link-icon">
            <i className="ic ic-arrow-right"></i>
          </span>
          <a className="shop-link" href="/#">
            SHOP NOW
          </a>
        </div>
      </div>

      {/* <!-- Services --> */}
      <ul className="service-list">
        <li className="service-item">
          <div className="service">
            <div className="service-icon">
              <span className="service-icon-bg">
                <i className="ic ic-free-shipping-1"></i>
              </span>
            </div>
            <div className="service-description">
              <h4 className="service-title">Free Shipping</h4>
              <p className="service-text">On purchases over $199</p>
            </div>
          </div>
        </li>

        <li className="service-item">
          <div className="service">
            <div className="service-icon">
              <span className="service-icon-bg">
                <i className="ic ic-happy-face"></i>
              </span>
            </div>
            <div className="service-description">
              <h4 className="service-title">99% Satisfied Customers</h4>
              <p className="service-text">Our clients' opinions speak for themselves</p>
            </div>
          </div>
        </li>

        <li className="service-item">
          <div className="service">
            <div className="service-icon">
              <span className="service-icon-bg">
                <i className="ic ic-guarantee-1"></i>
              </span>
            </div>
            <div className="service-description">
              <h4 className="service-title">Originality Guaranteed</h4>
              <p className="service-text">30 days warranty for each product from our store</p>
            </div>
          </div>
        </li>
      </ul>
    </section>
  );
};
