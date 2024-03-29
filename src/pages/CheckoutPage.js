import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { commerce } from "../components/lib/commerce";
import { Link } from "react-router-dom";
import { sizeandid } from "../components/Products/SingelProduct/SingelProduct";
const CheckoutPage = ({ cart, setOrder, order }) => {
  const [checkoutToken, setCheckoutToken] = useState(null);

  useEffect(() => {
    const generateToken = async () => {
      try {
        const token = await commerce.checkout.generateToken(cart.id, {
          type: "cart"
        });

        setCheckoutToken(token);
      } catch (error) {
        console.log(error);
      }
    };
    generateToken();
  }, [cart]);

  return (
    <main style={{ height: "800px" }}>
      <Wrapper className="page">
        {cart.total_itemms < 1 ? (
          <div className="empty">
            <h2>your cart is empty</h2>
            <Link to="/products" className="btn">
              fill it
            </Link>
          </div>
        ) : (
          <div>checkout</div>
        )}
      </Wrapper>
    </main>
  );
};
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  .empty {
    text-aling: center;
  }
`;
export default CheckoutPage;
