import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Account = ({ cart }) => {
  const [saved, setSaved] = useState(false);
  useEffect(() => {
    document.querySelectorAll(".img-cont").forEach((el) => {
      el.addEventListener("mouseover", (e) => {
        e.currentTarget.children[0].style.opacity = 0.5;
      });
    });

    document.querySelectorAll(".img-cont").forEach((el) => {
      el.addEventListener("mouseout", (e) => {
        e.currentTarget.children[0].style.opacity = 1;
      });
    });
  }, []);

  return (
    <Wrapper>
      <h4>Your cart items</h4>
      <div className="container">
        {cart.line_items.map((item, ind) => {
          const { id, name, image, price } = item;
          return (
            <div key={id} className="img-cont">
              <img src={image.url} alt={name} className="cart-img" />
              <div className="cart-item-content">
                <h3>{item.name}</h3>
                <p>{item.price.formatted_with_symbol}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div style={{ marginTop: "2rem" }}>more content goes here</div>
    </Wrapper>
  );
};

export default Account;

const Wrapper = styled.section`
  margin-top: 2rem;
  height: 900px;
  h4 {
    margin-left: 0.5rem;
    margin-bottom: 1rem;
  }
  h3 {
    font-size: 1rem;
    margin-bottom: 0.2rem;
  }
  .container {
    display: flex;
    flex-direction: row;
    overflow-x: scroll;
  }
  .img-cont {
    position: relative;
    background: black;
    margin-right: 0.4rem;
  }
  .cart-img {
    width: 180px;
    height: 100%;
    display: block;
    object-fit: cover;
    transition: all 0.3s linear;
    cursor: pointer;
  }
  .cart-item-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 2.5rem;
    border-radius: 50%;
    transition: var(--transition);
    color: white;
    opacity: 0;
  }
  .img-cont: hover .cart-item-content {
    opacity: 1;
  }
`;
// dsiplay account details
// display cart items and link to the item
// display saved items and link to the item
// display purchhases
