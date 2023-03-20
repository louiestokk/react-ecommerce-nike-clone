import React from "react";
import { Link } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";
import { useProductsContext } from "../../../context/products_context";
const RelatedProducts = ({ product }) => {
  const navigate = useNavigate();
  const { products } = useProductsContext();

  return (
    <>
      {product && (
        <h3
          className="popular-products-title"
          style={{
            marginLeft: "1rem",
            marginBottom: "1.5rem",
            width: "220px"
          }}
        >
          Andra Köpte Även
        </h3>
      )}

      <div
        style={{ overflowX: "scroll", marginBottom: "3rem", display: "flex" }}
      >
        {product &&
          products
            ?.filter((el) => el.categories?.[0].name === "Duovagnar")
            .map((el) => {
              const { id, name, image, price } = el;
              return (
                <div
                  key={id}
                  style={{
                    marginLeft: "1rem",
                    cursor: "pointer"
                  }}
                  onClick={() => navigate(`/product/${id}`)}
                >
                  <img
                    src={image.url}
                    alt={name}
                    style={{
                      borderRadius: "5px 5px",
                      width: "200px",
                      height: "200px",
                      objectFit: "cover"
                    }}
                  />
                  <h4
                    style={{
                      marginLeft: "0.5rem",
                      color: "black",
                      fontSize: "0.8rem",
                      marginTop: "0.5rem",
                      marginBottom: "0.5rem",
                      opacity: "0.9"
                    }}
                  >
                    {name}
                  </h4>
                  <p
                    style={{
                      marginLeft: "0.5rem",
                      color: "black",
                      fontSize: "0.8rem",
                      textDecoration: "line-through"
                    }}
                  >
                    kr{price?.raw * 1.5}.00
                  </p>
                  <p
                    style={{
                      marginLeft: "0.5rem",
                      color: "black",
                      fontSize: "0.8rem",
                      opacity: "0.8",
                      color: "red"
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
