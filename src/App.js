import React, { useState, useEffect } from "react";
import { commerce } from "./components/lib/commerce";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// nya v7 raect-router-dom man har bytt ut Switch mot Routes. Och i  Route skall man göra som nedan samt useLocation är navigate och loaction.push('/') är navigate('/')
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Account from "./components/Account/Account";
import SingelProduct from "./components/Products/SingelProduct/SingelProduct";
import Products from "./components/Products/Products";
import Footer from "./components/Footer/Footer";
import Cart from "./components/Cart/Cart";
import CheckoutPage from "./pages/CheckoutPage";
import PrivatRoute from "./pages/PrivatRoute";
const App = () => {
  const [products, setProducts] = useState([]);
  const [userCart, setCart] = useState({});
  const [order, setOrder] = useState({ size: "", id: "" });
  const [errorMessage, setErrorMessage] = useState("");
  const fetchCart = async () => {
    const resp = await commerce.cart.retrieve();
    setCart(resp);
  };
  const handleAddToCart = async (productId, quantity) => {
    const { cart } = await commerce.cart.add(productId, quantity);
    setCart(cart);
  };
  const updateCartQty = async (productId, quantity) => {
    const { cart } = await commerce.cart.update(productId, { quantity });
    setCart(cart);
  };
  const removeFromCart = async (productId) => {
    const { cart } = await commerce.cart.remove(productId);
    setCart(cart);
  };
  const handleEmptyCart = async () => {
    const { cart } = await commerce.cart.empty();
    setCart(cart);
  };
  const refreshCart = async () => {
    const newCart = await commerce.cart.refresh();
    setCart(newCart);
  };
  const captureCheckout = async (checkoutTokenId, neworder) => {
    try {
      const incomingOrder = await commerce.checkout.capture(
        checkoutTokenId,
        neworder
      );
      setOrder(incomingOrder);
      refreshCart();
    } catch (error) {
      setErrorMessage(error.data.error.message);
      console.log(error.data.error.message);
    }
  };
  useEffect(() => {
    fetchCart();
  }, [userCart]);
  return (
    <Router>
      <Navbar cart={userCart} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/account/:user"
          element={
            <PrivatRoute>
              <Account cart={userCart} />
            </PrivatRoute>
          }
        ></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route
          path="/product/:id"
          element={
            <SingelProduct
              handleAddToCart={handleAddToCart}
              setOrder={setOrder}
              order={order}
            />
          }
        ></Route>
        <Route
          path="/cart"
          element={
            <Cart
              cart={userCart}
              updateCartQty={updateCartQty}
              removeFromCart={removeFromCart}
              handleEmptyCart={handleEmptyCart}
            />
          }
        ></Route>
        <Route
          path="/checkout"
          element={
            <CheckoutPage cart={userCart} setOrder={setOrder} order={order} />
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
