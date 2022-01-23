import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Hero from "../components/Hero";
import HomeTextSlider from "../components/HomeTextSlider";
import { useProductsContext } from "../context/products_context";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Oval } from "react-loader-spinner";
import banner from "../images/nikekk.jpg";
import banner1 from "../images/yes.webp";
import trend from "../images/trend1.webp";
import trend2 from "../images/trend2.webp";
const Home = () => {
  const navigate = useNavigate();
  const { products, loading } = useProductsContext();
  return (
    <>
      <HomeTextSlider />
      <Hero />
      <h2 className="best-airmax-text">The Best of Air Max</h2>
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
                marginLeft: product.name === "Nike Air Vapor Max" && "1rem",
              }}
            >
              <img src={product.image.url} alt={product.name} />
              <h5>{product.name}</h5>
              <Link
                to="/products/sneakers/airmax"
                style={{
                  color: "black",
                  borderBottom: "1px solid black",
                  fontSize: "1.2rem",
                }}
              >
                Shop
              </Link>
            </div>
          );
        })}
      </div>
      <section
        style={{
          display: "flex",
          margin: "5rem auto",
          justifyContent: "center",
          width: "100%",
        }}
        className="athlete-cont"
      >
        <div className="home-fleece">
          <img src={banner1} />
        </div>
        <div className="home-fleece">
          <img src={banner} alt="nike sports" style={{ opacity: "0.85" }} />
          <div className="fleece">
            <h2>Find Your Athlete Shoes</h2>
            <Link to="/products">Shop</Link>
          </div>
        </div>
      </section>
      <h2 className="best-airmax-text">Trending Styles</h2>
      <section className="trending-cont">
        <div
          className="trending"
          style={{ marginRight: "1rem", marginLeft: "0.5rem" }}
        >
          <img src={trend} alt="nike trending" />
          <div className="trend-content">
            <h4>Valentine's Day Gifts That'll Get Hearts racing</h4>
            <button type="button" onClick={() => navigate("/products")}>
              Shop
            </button>
          </div>
        </div>
        <div className="trending" style={{ marginRight: "0.5rem" }}>
          <img src={trend2} alt="nike trend" />
          <div className="trend-content">
            <h4>Shoes Always $100 % Under</h4>
            <button type="button" onClick={() => navigate("/products")}>
              Shop
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
// bygg på med dynamiska banners / sections och hämta data från utils, så du kan endast byta bild,tex  etx i data
