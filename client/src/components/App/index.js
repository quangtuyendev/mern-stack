import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ROUTERS } from '../../constants/router';

function App() {
  function renderRouter() {
    return ROUTERS.map(({ path, component, exact }) => (
      <Route key={path} path={path} exact={exact} component={component} />
    ));
  }

  return (
    <>
      <Switch>{renderRouter()}</Switch>
      <ToastContainer />
    </>
  );
}

export default App;
