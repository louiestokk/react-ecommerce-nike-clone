import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch,
} from "react-router-dom";
// nya raect-router-dom man har bytt ut Switch mot Routes. Och i  Route skall man göra som nedan
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Account from "./components/Account/Account";
import Product from "./components/Products/Product/Product";
import Products from "./components/Products/Products";
const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/account/:user" element={<Account />}></Route>
        <Route path="/products" exact element={<Products />}></Route>
        <Route path="/product/:id" exact element={<Product />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
