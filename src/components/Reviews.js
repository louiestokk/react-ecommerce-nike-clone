import React from "react";
import { FaStar } from "react-icons/fa";
import { reviewsdata } from "../utils/reviewsdata";

const Reviews = () => {
  return (
    <div className="reviews-root">
      <h1 className="popular-products-title" style={{ marginBottom: "1rem " }}>
        Kundrecensioner
      </h1>
      {reviewsdata?.map((review, ind) => {
        return (
          <div key={ind} className="reviews-container">
            <section style={{ display: "flex" }}>
              <FaStar style={{ margin: "0 0.2rem", color: "orange" }} />
              <FaStar style={{ margin: "0 0.2rem", color: "orange" }} />
              <FaStar style={{ margin: "0 0.2rem", color: "orange" }} />
              <FaStar style={{ margin: "0 0.2rem", color: "orange" }} />
              <FaStar style={{ margin: "0 0.2rem", color: "orange" }} />
            </section>
            <h4>{review.title}</h4>
            <p>{review.text}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Reviews;
