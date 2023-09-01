import { Routes, Route, BrowserRouter } from 'react-router-dom';

import { Header, Footer } from './shared/components';

import './stylesheet/style.scss';
import { appRoutes } from './app.route';
import { CartProvider } from './app/core/contexts/CartContext';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Provider store={store}>
          <div className="App">
            <Header />
            <main className="main">
              <Routes>
                {appRoutes.map(({ path, element }) => {
                  const Page = element;
                  return <Route key={Date.now()} path={path} element={<Page />} />;
                })}
              </Routes>
            </main>
            <Footer />
          </div>
        </Provider>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
