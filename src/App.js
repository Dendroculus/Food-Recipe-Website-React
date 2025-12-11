import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import routes from './routes';

function RouteMap() {
  return routes.map((r) => {
    const C = r.component;
    return (
      <Route
        key={r.path}
        path={r.path}
        element={
          <React.Suspense fallback={<div style={{ padding: 20 }}>Loading…</div>}>
            <C />
          </React.Suspense>
        }
      />
    );
  });
}

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>{RouteMap()}</Routes>
      </BrowserRouter>
    );
  }
}

export default App;