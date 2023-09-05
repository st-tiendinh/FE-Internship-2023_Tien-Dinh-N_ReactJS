interface ServiceDetailPropTypes {
  title: string;
  description: string;
  icon: string;
}

export const ServiceDetailItem = ({ title, description, icon }: ServiceDetailPropTypes) => {
  return (
    <li className="service-detail-item col col-3 col-md-6 col-sm-12">
      <div className="service-detail">
        <div className="service-detail-icon">
          <span className="service-detail-icon-bg">
            <i className={'ic ' + icon}></i>
          </span>
        </div>
        <div className="service-detail-info">
          <h4 className="service-detail-title">{title}</h4>
          <p className="service-detail-desc">{description}</p>
        </div>
      </div>
    </li>
  );
};
