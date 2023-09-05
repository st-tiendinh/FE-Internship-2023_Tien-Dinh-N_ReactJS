import ServiceItem from './components/ServiceItem';

export const Banner = () => {
  const serviceData = [
    {
      id: 1,
      title: 'Free Shipping',
      description: 'On purchases over $199',
      icon: 'ic-free-shipping-1',
    },
    {
      id: 2,
      title: '99% Satisfied Customers',
      description: "Our clients' opinions speak for themselves",
      icon: 'ic-happy-face',
    },
    {
      id: 3,
      title: 'Originality Guaranteed',
      description: '30 days warranty for each product from our store',
      icon: 'ic-guarantee-1',
    },
  ];
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
        {serviceData.map((item) => (
          <ServiceItem
            key={item.id}
            title={item.title}
            description={item.description}
            icon={item.icon}
          />
        ))}
      </ul>
    </section>
  );
};
