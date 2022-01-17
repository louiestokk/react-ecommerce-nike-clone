import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch,
} from "react-router-dom";
import { commerce } from "./components/lib/commerce";
// nya raect-router-dom man har bytt ut Switch mot Routes. Och i  Route skall man göra som nedan
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Account from "./components/Account/Account";
import Product from "./components/Products/Product/Product";
import Products from "./components/Products/Products";
const App = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [colors, setColors] = useState([]);
  const [cart, setCart] = useState({});
  const [order, setOrder] = useState({});
  const [errormessage, setErrorMessage] = useState("");
  const fetchProducst = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
    const cate = data.map((product) => product.categories);
    const cate2 = [].concat(...cate);
    const uniqcategories = new Set(cate2.map((el) => el.name));
    const newArr = Array.from(uniqcategories);
    setCategories(newArr);
    const color = [].concat(...data.map((el) => el.variant_groups));
    setColors(color);
  };
  useEffect(() => {
    fetchProducst();
  }, []);
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          exact
          element={<Home products={products} setProducts={setProducts} />}
        />
        <Route path="/account/:user" element={<Account />}></Route>
        <Route
          path="/products"
          exact
          element={
            <Products
              products={products}
              categories={categories}
              colors={colors}
            />
          }
        ></Route>
        <Route path="/product/:id" exact element={<Product />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
