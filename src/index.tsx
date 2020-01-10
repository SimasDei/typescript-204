import React from "react";
import ReactDOM from "react-dom";

import GlobalContext, { initialValues } from "./global/state";
import "./index.css";

import App from "./App";

const Application = () => (
  <GlobalContext.Provider value={initialValues}>
    <App />
  </GlobalContext.Provider>
);

ReactDOM.render(<Application />, document.getElementById("root"));
