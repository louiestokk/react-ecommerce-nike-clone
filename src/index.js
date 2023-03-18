import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
import { UserProvider } from "./context/user_context";
import { FilterProvider } from "./context/filter_context";
import { ProductsProvider } from "./context/products_context";

ReactDOM.render(
  <UserProvider>
    <ProductsProvider>
      <FilterProvider>
        <App />
      </FilterProvider>
    </ProductsProvider>
  </UserProvider>,
  document.getElementById("root")
);
