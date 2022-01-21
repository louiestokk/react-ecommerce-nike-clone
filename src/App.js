import React, { useState, useEffect } from "react";
import { commerce } from "./components/lib/commerce";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch,
} from "react-router-dom";

// nya v7 raect-router-dom man har bytt ut Switch mot Routes. Och i  Route skall man göra som nedan samt useLocation är navigate och loaction.push('/') är navigate('/')
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Account from "./components/Account/Account";
import SingelProduct from "./components/Products/SingelProduct/SingelProduct";
import Products from "./components/Products/Products";
import Footer from "./components/Footer/Footer";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/CheckoutForm/Checkout/Checkout";
const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [order, setOrder] = useState({});
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
  }, []);
  return (
    <Router>
      <Navbar cart={cart} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/account/:user" element={<Account />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route
          path="/product/:id"
          element={<SingelProduct handleAddToCart={handleAddToCart} />}
        ></Route>
        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              updateCartQty={updateCartQty}
              removeFromCart={removeFromCart}
              handleEmptyCart={handleEmptyCart}
            />
          }
        ></Route>
        <Route
          path="/checkout"
          element={
            <Checkout
              cart={cart}
              captureCheckout={captureCheckout}
              order={order}
              errorMessage={errorMessage}
            />
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
