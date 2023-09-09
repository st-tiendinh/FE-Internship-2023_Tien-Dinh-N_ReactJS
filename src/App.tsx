import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';

import { Header, Footer } from './shared/components';

import './stylesheet/style.scss';
import { appRoutes } from './app.route';
import { fetchProductDataFromApi } from './redux/actions/product';
import { ModalProvider } from './app/context/ModalProvider';
import { RootState } from './redux/reducers/root';
import Home from './app/pages/home/Home';

function App() {
  const isLogged = useSelector((state: RootState) => state.user.isLogged);
  const dispatch = useDispatch<any>();

  useEffect(() => {
    dispatch(fetchProductDataFromApi());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <ModalProvider>
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
      </ModalProvider>
    </BrowserRouter>
  );
}

export default App;
