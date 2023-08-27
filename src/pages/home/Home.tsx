import { Banner, Advertisement, Newsletter, Service, Product } from '../../shared/components';

const Home = ({ productData, addToCart }: any) => {
  return (
    <main className='main'>
      <div className='home-page'>
        {/* <!-- Banner section --> */}
        <Banner />

        {/* <!-- Advertisement section --> */}
        <Advertisement />

        {/* <!-- Products section --> */}
        <section className='section section-product'>
          <div className='container'>
            <div className='section-product-header'>
              <h3 className='section-title'>Selected just for you</h3>
              <a href='/#' className='btn btn-outline btn-sm-outline'>
                SHOW MORE
              </a>
            </div>
            {/* Product list */}
            <div className='product-wrapper'>
              <ul className='product-list row'>
                {/* Product Item */}
                {productData.map((product: any, index: number) => {
                  return <Product key={index} product={product} myKey={product.id} addToCart={addToCart} />;
                })}
              </ul>
            </div>
          </div>
        </section>

        {/* <!-- Service detail --> */}
        <Service />

        {/* <!-- Product in today --> */}
        <section className='section section-product'>
          <div className='container'>
            <h3 className='section-title'>Products in today</h3>
            {/* Product list */}
            <div className='product-wrapper'>
              <ul className='product-list row'>
                {/* Product Item */}
                {productData.map((product: any, index: number) => {
                  return <Product key={index} product={product} myKey={product.id} addToCart={addToCart} />;
                })}
              </ul>
            </div>
          </div>
        </section>

        {/* <!-- Newsletter --> */}
        <Newsletter />
      </div>
    </main>
  );
};

export default Home;
