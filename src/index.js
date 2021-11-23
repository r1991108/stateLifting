import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import AppTest from "./AppTest";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <AppTest />
  </React.StrictMode>,
  document.querySelector("#root")
);
