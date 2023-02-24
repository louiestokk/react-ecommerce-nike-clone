import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
const Hero = () => {
  let navigate = useNavigate();
  return (
    <Wrapper className="hero">
      <div className="hero-content">
        <h1>STYLED WITH SELF LOVE</h1>
        <p>
          Show up for yourself in styles that'll keep your motivated all year.
        </p>
        <button type="button" onClick={() => navigate("/products")}>
          Shop
        </button>
      </div>
    </Wrapper>
  );
};

export default Hero;
const Wrapper = styled.div`
  .hero {
    position: relative;
    background: url("https://cdn.shopify.com/s/files/1/1298/3583/products/Blue_2309cb68-bd90-477f-a15b-f8618a900758_1080x996.jpg?v=1662465719"),
      no-repeat;
    height: 500px;
    background-position: center;
    width: 90%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
  }
  .hero-content {
    position: absolute;
    bottom: 16%;
    color: white;
  }
  .hero-content h1 {
    font-size: 4.4rem;
    max-width: 400px;
    font-family: "Anton", sans-serif;
    line-height: 70px;
    margin-left: 2rem;
  }
  .hero-content p {
    margin: 1rem 2rem;
    font-size: 1.1rem;
    max-width: 300px;
    line-height: 20px;
  }
  .hero-content button {
    margin: 1rem 2rem;
    width: 6rem;
    height: 2.4rem;
    background: white;
    color: black;
    font-size: 1rem;
    border-radius: 15px 15px;
    border: none;
    cursor: pointer;
  }
  .hero-content button:hover {
    opacity: 0.7;
  }
  @media screen and (max-width: 680px) {
    .hero-content {
      bottom: -60%;
      color: black;
      margin: 1rem -2rem;
    }
    .hero-content button {
      background: black;
      color: white;
    }
    .hero-content h1 {
      font-size: 3rem;
      max-width: 300px;
      line-height: 50px;
    }
    .hero {
      margin-bottom: 24rem;
    }
    .best-airmax-text {
      margin-left: 1.1rem;
    }
    .text-slide {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .text-slide a {
      margin-left: 0.5rem;
      font-size: 0.8rem;
    }
    .category-text-smallerscreen {
      display: none;
    }
    .athlete-cont {
      display: flex;
      flex-direction: column;
    }
    .trending-cont {
      display: flex;
      flex-direction: column;
    }
  }

  @media screen and (max-width: 680px) {
    .hero-content {
      bottom: -60%;
      color: black;
      margin: 1rem -2rem;
    }
    .hero-content button {
      background: black;
      color: white;
    }
    .hero-content h1 {
      font-size: 3rem;
      max-width: 300px;
      line-height: 50px;
    }
    .hero {
      margin-bottom: 24rem;
    }
    .best-airmax-text {
      margin-left: 1.1rem;
    }
    .text-slide {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .text-slide a {
      margin-left: 0.5rem;
      font-size: 0.8rem;
    }
    .category-text-smallerscreen {
      display: none;
    }
    .athlete-cont {
      display: flex;
      flex-direction: column;
    }
    .trending-cont {
      display: flex;
      flex-direction: column;
    }
  }
`;
