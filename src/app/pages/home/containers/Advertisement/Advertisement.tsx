export const Advertisement = () => {
  return (
    <section className="section section-advertisement">
      <div className="container">
        <ul className="advertisement-list row">
          <li className="advertisement-item col col-6 col-md-12 col-sm-12">
            <div className="advertisement">
              <h4 className="advertisement-info">New arrivalsare now in!</h4>
              <a href="/#" className="btn btn-advertisement btn-sm-advertisement">
                SHOW COLLECTION
              </a>
            </div>
          </li>

          <li className="advertisement-item col col-3 col-md-6 col-sm-6">
            <div className="advertisement">
              <h4 className="advertisement-info">Basic t-shirts $29,99</h4>
              <a href="/#" className="btn btn-advertisement btn-sm-advertisement">
                MORE DETAILS
              </a>
            </div>
          </li>

          <li className="advertisement-item col col-3 col-md-6 col-sm-6">
            <div className="advertisement">
              <span className="badge badge-danger">-50%</span>
              <h4 className="advertisement-info">Sale this summer</h4>
              <a href="/#" className="btn btn-advertisement btn-sm-advertisement">
                VIEW ALL
              </a>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
