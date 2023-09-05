import { ServiceDetailItem } from './components/ServiceDetailItem';

export const ServiceDetail = () => {
  const serviceDetailData = [
    {
      id: 1,
      title: 'Free Shipping',
      description:
        'All purchases over $199 are eligible for free shipping via USPS First className Mail.',
      icon: 'ic-free-shipping-2',
    },
    {
      id: 2,
      title: 'Easy Payments',
      description: 'All payments are processed instantly over a secure payment protocol.',
      icon: 'ic-payment-2',
    },
    {
      id: 3,
      title: 'Money-Back Guarantee',
      description:
        "If an item arrived damaged or you've changed your mind, you can send itback for a full refund.",
      icon: 'ic-guarantee-2',
    },
    {
      id: 4,
      title: 'Finest Quality',
      description:
        'Designed to last, each of our products hasbeen crafted with the finest materials.',
      icon: 'ic-materials-2',
    },
  ];

  return (
    <section className="section section-services">
      <div className="container">
        <h3 className="section-title">Why should you choose us?</h3>
        <ul className="service-detail-list row">
          {serviceDetailData.map((item) => (
            <ServiceDetailItem
              key={item.id}
              title={item.title}
              description={item.description}
              icon={item.icon}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};
