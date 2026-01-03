import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import routes from './routes';
import './pages/home/Home.css';
import Loader from './components/loader/Loader';

const RouteMap = () =>
  routes.map((r) => {
    const C = r.component;
    return (
      <Route
        key={r.path}
        path={r.path}
        element={<C />}
      />
    );
  });

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <React.Suspense fallback={<Loader />}>
          <Routes>{RouteMap()}</Routes>
        </React.Suspense>
      </BrowserRouter>
    );
  }
}

export default App;
