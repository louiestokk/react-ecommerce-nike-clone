import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Hero from "../components/Hero";
import HomeTextSlider from "../components/HomeTextSlider";
import { useProductsContext } from "../context/products_context";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Oval } from "react-loader-spinner";
import banner from "../images/nikekk.jpg";
import banner1 from "../images/yes.webp";
import trend from "../images/trend1.png";
import trend2 from "../images/trend2.png";
import styled from "styled-components";
import PopularCategories from "../components/PopularCategories";
import Blog from "../components/Blog";
import Reviews from "../components/Reviews";
const Home = () => {
  const navigate = useNavigate();
  const { products, loading } = useProductsContext();
  return (
    <Wrapper>
      <HomeTextSlider />
      <Hero />
      <PopularCategories />
      <h2 className="best-airmax-text">Bäst omdöme</h2>
      <div className="airmax-container">
        {loading && (
          <Oval heigth="150" width="150" color="black" ariaLabel="loading" />
        )}
        {products.map((product) => {
          return (
            <div
              className="airmax"
              key={product.id}
              style={{
                marginLeft: "1rem"
              }}
            >
              <img src={product.image.url} alt={product.name} />
              <h5>{product.name}</h5>
              <Link
                to={`/product/${product.id}`}
                style={{
                  color: "black",
                  borderBottom: "1px solid black",
                  fontSize: "1.2rem"
                }}
              >
                Shop
              </Link>
            </div>
          );
        })}
      </div>
      <h2 className="best-airmax-text">Bäst Säljare</h2>
      <div className="airmax-container">
        {loading && (
          <Oval heigth="150" width="150" color="black" ariaLabel="loading" />
        )}
        {products.map((product, ind) => {
          if (ind === 0) return;
          if (ind === 1) return;
          return (
            <div
              className="airmax"
              key={product.id}
              style={{
                marginLeft: "1rem"
              }}
            >
              <img src={product.image.url} alt={product.name} />
              <h5>{product.name}</h5>
              <Link
                to={`/product/${product.id}`}
                style={{
                  color: "black",
                  borderBottom: "1px solid black",
                  fontSize: "1.2rem"
                }}
              >
                Shop
              </Link>
            </div>
          );
        })}
      </div>

      <h2 className="best-airmax-text">Trendigt Nu</h2>
      <section className="trending-cont">
        <div
          className="trending"
          style={{ marginRight: "1rem", marginLeft: "0.5rem" }}
        >
          <img src={trend} alt="baby stroller" />
          <div className="trend-content" style={{ textAlign: "center" }}>
            <h4>City star all in one duo pram. Now 50%</h4>
            <button type="button" onClick={() => navigate("/products")}>
              Shop
            </button>
          </div>
        </div>
        <div className="trending" style={{ marginRight: "0.5rem" }}>
          <img src={trend2} alt="baby pram" />
          <div className="trend-content" style={{ textAlign: "center" }}>
            <h4>Stylish twin pram with all you need. Now 30%</h4>
            <button type="button" onClick={() => navigate("/products")}>
              Shop
            </button>
          </div>
        </div>
      </section>
      <Reviews />
      <Blog />
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.section`
  .trending {
    transition: all 0.3s linear;
    overflow: hidden;
    cursor: pointer;
  }
  .trending img {
    transition: all 0.3s linear;
  }
  .trending:hover img {
    transform: scale(1.1);
    transition: all 0.3s linear;
  }
`;
