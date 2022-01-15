import React, { useState } from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
const Home = () => {
  return (
    <>
      <div className="home-text-slider">
        <h4
          style={{
            letterSpacing: "1px",
            margin: "0.2rem 0",
            color: "#111827",
            fontSize: "0.9rem",
          }}
        >
          Save Up to 40%
        </h4>
        <Link
          to="/"
          style={{
            letterSpacing: "1px",
            fontSize: "0.86rem",
            borderBottom: "1px solid gray",
            color: "#111827",
            margin: ".2rem 0",
          }}
        >
          Shop all your favorites
        </Link>
      </div>
      <Hero />
    </>
  );
};

export default Home;
