import { Header, Banner, Advertisement, Newsletter, Service, Product, Footer } from '../../shared/components';

const Home = () => {
  return (
    <>
      <Header />
      <main className='main'>
        <div className='home-page'>
          {/* <!-- Banner section --> */}
          <Banner />

          {/* <!-- Advertisement section --> */}
          <Advertisement />

          {/* <!-- Products section --> */}
          <Product>
            <div className='section-product-header'>
              <h3 className='section-title'>Selected just for you</h3>
              <a href='/#' className='btn btn-outline btn-sm-outline'>
                SHOW MORE
              </a>
            </div>
          </Product>

          {/* <!-- Service detail --> */}
          <Service />

          {/* <!-- Product in today --> */}
          <Product>
            <h3 className='section-title'>Products in today</h3>
          </Product>

          {/* <!-- Newsletter --> */}
          <Newsletter />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Home;
