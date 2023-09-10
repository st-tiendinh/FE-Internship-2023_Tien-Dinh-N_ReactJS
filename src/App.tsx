import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { Header, Footer } from './shared/components';
import Home from './app/pages/home/Home';

import { PopperProvider } from './app/context/PopperProvider';
import { appRoutes } from './app.route';
import './stylesheet/style.scss';

import { fetchProductDataFromApi } from './redux/actions/product';
import { RootState } from './redux/reducers/root';

function App() {
  const isLogged = useSelector((state: RootState) => state.user.isLogged);
  const dispatch = useDispatch<any>();

  useEffect(() => {
    dispatch(fetchProductDataFromApi());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <PopperProvider>
        <div className="App">
          <Header />
          <main className="main">
            <Routes>
              {appRoutes.map(({ path, element }) => {
                const Page = element;
                return (
                  <Route key={Date.now()} path={path} element={!isLogged ? <Home /> : <Page />} />
                );
              })}
            </Routes>
          </main>
          <Footer />
        </div>
      </PopperProvider>
    </BrowserRouter>
  );
}

export default App;
