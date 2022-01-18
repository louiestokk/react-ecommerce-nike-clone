import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch,
} from "react-router-dom";
import { commerce } from "./components/lib/commerce";
// nya v7 raect-router-dom man har bytt ut Switch mot Routes. Och i  Route skall man göra som nedan samt useLocation är navigate och loaction.push('/') är navigate('/')
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Account from "./components/Account/Account";
import SingelProduct from "./components/Products/SingelProduct.js/SingelProduct";
import Products from "./components/Products/Products";
const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/account/:user" element={<Account />}></Route>
        <Route path="/products" exact element={<Products />}></Route>
        <Route path="/product/:id" element={<SingelProduct />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
