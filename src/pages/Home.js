import React, { useState } from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
const Home = () => {
  return (
    <>
      <div className="home-text-slider">
        <h4>Save Up to 40%</h4>
        <Link to="/">Shop all your favorites link</Link>
      </div>
      <Hero />
    </>
  );
};

export default Home;
