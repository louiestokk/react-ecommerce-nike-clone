import React, { useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="home-text-slider">
        <h4>Save Up to 40%</h4>
        <Link to="/">Shop all your favorites link</Link>
      </div>
    </>
  );
};

export default Home;
