import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { PokedexProvider } from "./context/ContextProvider";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <PokedexProvider>
    <App />
  </PokedexProvider>,
  document.getElementById("root")
);
