import React from "react";
import { Provider } from "react-redux";
import Routes from "./routes/index";

import configureStore from "./store/index";

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
);

export default App;
