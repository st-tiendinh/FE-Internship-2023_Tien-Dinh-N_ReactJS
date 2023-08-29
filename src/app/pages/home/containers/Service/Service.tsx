export const Service = () => {
  return (
    <section className="section section-services">
      <div className="container">
        <h3 className="section-title">Why should you choose us?</h3>
        <ul className="service-detail-list row">
          <li className="service-detail-item col col-3 col-md-6 col-sm-12">
            <div className="service-detail">
              <div className="service-detail-icon">
                <span className="service-detail-icon-bg">
                  <i className="ic ic-free-shipping-2"></i>
                </span>
              </div>
              <div className="service-detail-info">
                <h4 className="service-detail-title">Free Shipping</h4>
                <p className="service-detail-desc">
                  All purchases over $199 are eligible forfree shipping via USPS First className Mail.
                </p>
              </div>
            </div>
          </li>

          <li className="service-detail-item col col-3 col-md-6 col-sm-12">
            <div className="service-detail">
              <div className="service-detail-icon">
                <span className="service-detail-icon-bg">
                  <i className="ic ic-payment-2"></i>
                </span>
              </div>
              <div className="service-detail-info">
                <h4 className="service-detail-title">Easy Payments</h4>
                <p className="service-detail-desc">
                  All payments are processed instantlyover a secure payment protocol.
                </p>
              </div>
            </div>
          </li>

          <li className="service-detail-item col col-3 col-md-6 col-sm-12">
            <div className="service-detail">
              <div className="service-detail-icon">
                <span className="service-detail-icon-bg">
                  <i className="ic ic-guarantee-2"></i>
                </span>
              </div>
              <div className="service-detail-info">
                <h4 className="service-detail-title">Money-Back Guarantee</h4>
                <p className="service-detail-desc">
                  If an item arrived damaged or you'vechanged your mind, you can send itback for a full refund.
                </p>
              </div>
            </div>
          </li>

          <li className="service-detail-item col col-3 col-md-6 col-sm-12">
            <div className="service-detail">
              <div className="service-detail-icon">
                <div className="service-detail-icon-bg">
                  <i className="ic ic-materials-2"></i>
                </div>
              </div>
              <div className="service-detail-info">
                <h4 className="service-detail-title">Finest Quality</h4>
                <p className="service-detail-desc">
                  Designed to last, each of our products hasbeen crafted with the finest materials.
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
