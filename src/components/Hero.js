import React from "react";
import image from "../images/nikeshoe.jpg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Hero = () => {
  let navigate = useNavigate();
  return (
    <div className="hero">
      <div className="hero-content">
        <h1>STYLED WITH SELF LOVE</h1>
        <p>
          Show up for yourself in styles that'll keep your motivated all year.
        </p>
        <button type="button" onClick={() => navigate("/products")}>
          Shop
        </button>
      </div>
    </div>
  );
};

export default Hero;
