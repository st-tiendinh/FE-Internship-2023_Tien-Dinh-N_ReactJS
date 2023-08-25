export const Product = () => {
  return (
    <section className='section section-product'>
      <div className='container'>
        <div className='section-product-header'>
          <h3 className='section-title'>Selected just for you</h3>
          <a href='/#' className='btn btn-outline btn-sm-outline'>
            SHOW MORE
          </a>
        </div>
        {/* <!-- Product list --> */}
        <div className='product-wrapper'></div>
      </div>
    </section>
  );
};
