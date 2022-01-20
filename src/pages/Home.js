import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import HomeTextSlider from "../components/HomeTextSlider";
import { useProductsContext } from "../context/products_context";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Oval } from "react-loader-spinner";
const Home = () => {
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
    </>
  );
};

export default Home;
// bygg på med dynamiska banners / sections och hämta data från utils, så du kan endast byta bild,tex  etx i data
