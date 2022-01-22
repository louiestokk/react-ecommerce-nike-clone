import React from "react";
import { Link } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";

const RelatedProducts = ({ product }) => {
  const navigate = useNavigate();

  return (
    <>
      {product && product.related_products.length > 0 && (
        <h4
          style={{
            marginLeft: "1rem",
            marginBottom: "1.5rem",
            fontFamily: "fantasy",
            borderBottom: "1px solid black",
            width: "153px",
          }}
        >
          You Might Also Like
        </h4>
      )}

      <div
        style={{ overflowX: "scroll", marginBottom: "3rem", display: "flex" }}
      >
        {product &&
          product.related_products.map((el) => {
            const { id, name, image, price } = el;
            return (
              <div
                key={id}
                style={{
                  marginLeft: "1rem",
                  cursor: "pointer",
                }}
                onClick={() => navigate("/products")}
              >
                <img
                  src={image.url}
                  alt={name}
                  style={{ borderRadius: "5px 5px", width: "300px" }}
                />
                <h4
                  style={{
                    marginLeft: "0.5rem",
                    color: "black",
                    fontSize: "0.8rem",
                    marginTop: "0.5rem",
                    marginBottom: "0.5rem",
                    opacity: "0.9",
                  }}
                >
                  {name}
                </h4>
                <p
                  style={{
                    marginLeft: "0.5rem",
                    color: "black",
                    fontSize: "0.8rem",
                    opacity: "0.8",
                  }}
                >
                  {price.formatted_with_symbol}
                </p>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default RelatedProducts;
