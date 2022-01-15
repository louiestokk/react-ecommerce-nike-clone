import React from "react";
import image from "../images/nikeshoe.jpg";

const Hero = () => {
  return (
    <div
      //   style={{
      //     backgroundImage: `url(${image})`,
      //     height: "600px",
      //     backgroundPosition: "cover",
      //   }}
      className="hero"
    >
      <div className="hero-content">
        <h1>STYLED WITH SELF LOVE</h1>
        <p>
          Show up for yourself in styles that'll keep your motivated all year.
        </p>
        <button type="button">Shop</button>
      </div>
    </div>
  );
};

export default Hero;
