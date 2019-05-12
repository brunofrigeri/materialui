import React, { Fragment } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Register from "../pages/Register/index";

const Routes = () => (
  <Fragment>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Register} />
      </Switch>
    </BrowserRouter>
  </Fragment>
);

export default Routes;
