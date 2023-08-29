export const Newsletter = () => {
  return (
    <section className="section section-newsletter">
      <div className="container">
        <div className="newsletter">
          <div className="row">
            <div className="col col-6 col-md-12 col-sm-12">
              <h4 className="newsletter-title">Subscribe to our newsletter andreceive exclusive offers every week</h4>
            </div>
            <div className="col col-6 col-md-12 col-sm-12">
              <form action="" className="newsletter-form">
                <input type="email" className="newsletter-input" placeholder="Enter your email" />
                <button className="btn btn-primary btn-sm-primary" type="submit">
                  SUBSCRIBE
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
