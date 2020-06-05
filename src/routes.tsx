import React from "react";
import { Route, BrowserRouter, Redirect } from "react-router-dom";

import Home from "./pages/Home";
import CreatePoint from "./pages/CreatePoint";

const Routes = () => {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Route exact path="/cadastro" component={CreatePoint} />
      {window.location.pathname !== "/cadastro" && <Redirect to="/" />}
    </BrowserRouter>
  );
};

export default Routes;
