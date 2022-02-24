import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const HomeTextSlider = () => {
  const [slide, setSlide] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setSlide(!slide);
    }, 4000);
    return () => {
      clearTimeout(timeout);
    };
  });
  return (
    <Wrapper className="text-slider-container">
      {slide && (
        <div className={slide ? "text-show-slide text-slide" : "text-slide"}>
          <h4>Save Up to 40%</h4>
          <Link to="/products">Shop all your favorites</Link>
        </div>
      )}
      {!slide && (
        <div className={!slide ? "text-show-slide text-slide" : "text-slide"}>
          <h4>Free Membership - Exclusive products.</h4>
          <Link to="/joinus">Join Now</Link>
        </div>
      )}
    </Wrapper>
  );
};

export default HomeTextSlider;
const Wrapper = styled.div`
  .text-slider-container {
    text-align: center;
    height: 3.85rem;
    width: 100%;
    background: var(--mainGray);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s linear;
  }
  .text-slider-container a {
    color: var(--mainTextColor);
    border-bottom: 1px solid gray;
    cursor: pointer;
    font-size: 0.9rem;
    letter-spacing: 1px;
  }
  .text-slider-container h4 {
    font-size: 0.9rem;
    letter-spacing: 1px;
    margin: 0.1rem 0;
  }
  .text-slide {
    transition: all 0.3s linear;
    width: 100%;
    transform: translateX(-100%);
  }
  .text-show-slide {
    transform: translateX(0%);
    transition: all 0.3 linear;
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
