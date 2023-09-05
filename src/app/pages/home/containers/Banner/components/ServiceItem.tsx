interface ServiceItemPropTypes {
  title: string;
  description: string;
  icon: string;
}

const ServiceItem = ({ title, description, icon }: ServiceItemPropTypes) => {
  return (
    <li>
      <div className="service">
        <div className="service-icon">
          <span className="service-icon-bg">
            <i className={'ic ' + icon}></i>
          </span>
        </div>
        <div className="service-description">
          <h4 className="service-title">{title}</h4>
          <p className="service-text">{description}</p>
        </div>
      </div>
    </li>
  );
};

export default ServiceItem;
