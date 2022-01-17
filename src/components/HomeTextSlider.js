import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
    <div className="text-slider-container">
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
    </div>
  );
};

export default HomeTextSlider;
