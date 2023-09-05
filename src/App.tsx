import { Routes, Route, BrowserRouter } from 'react-router-dom';

import { Header, Footer } from './shared/components';

import './stylesheet/style.scss';
import { appRoutes } from './app.route';

function App() {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}

export default App;
