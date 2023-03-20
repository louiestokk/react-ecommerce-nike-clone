import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
import { UserProvider } from "./context/user_context";
import { FilterProvider } from "./context/filter_context";
import { ProductsProvider } from "./context/products_context";
import { HelmetProvider } from "react-helmet-async";
const APP = (
  <UserProvider>
    <ProductsProvider>
      <FilterProvider>
        <HelmetProvider>
          <App />
        </HelmetProvider>
      </FilterProvider>
    </ProductsProvider>
  </UserProvider>
);
const rootElement = document.getElementById("root");

if (rootElement.hasChildNodes()) {
  ReactDOM.hydrate(APP, rootElement);
} else {
  ReactDOM.render(APP, rootElement);
}
