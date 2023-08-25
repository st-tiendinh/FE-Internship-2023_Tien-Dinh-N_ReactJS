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
          <Product />

          {/* <!-- Service detail --> */}
          <Service />

          {/* <!-- Product in today --> */}
          <section className='section section-product'>
            <div className='container'>
              <h3 className='section-title'>Products in today</h3>
              {/* <!-- Product list --> */}
              <div className='product-wrapper'></div>
            </div>
          </section>

          {/* <!-- Newsletter --> */}
          <Newsletter />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Home;
