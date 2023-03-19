import React from "react";
import { CardContent, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { makeStyles } from "@material-ui/core";
import OnElementPop from "../../OnElementPop";
import { useNavigate } from "react-router-dom";
const useStyles = makeStyles({
  root: {
    position: "relative",
    width: "98%",
    borderRadius: "5px",
    margin: "0.5rem auto",
    display: "flex",
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
    cursor: "pointer"
  },
  img: {
    width: "180px",
    height: "180px",
    objectFit: "contain",
    backgroundPosition: "center",
    borderRadius: "5px"
  }
});
const Product = ({ product }) => {
  const navigate = useNavigate();
  const classes = useStyles();
  const { id, name, price, categories, image, description } = product;
  console.log(product);
  return (
    <div
      className={classes.root}
      onClick={() => navigate(`/product/${id}`)}
      id="product-item"
    >
      <img src={image.url} alt={name} className={classes.img} />
      <CardContent>
        <h4
          className="popular-products-title"
          style={{
            marginLeft: "1rem",
            marginBottom: "0.6rem",
            fontSize: "1rem"
          }}
        >
          {name}
        </h4>
        <Typography
          variant="p"
          style={{
            marginLeft: "1rem",
            marginBottom: "1rem",
            fontSize: "1rem",
            textDecoration: "line-through",
            color: "gray"
          }}
        >
          kr{product?.price?.raw * 1.5}.00
        </Typography>
        <Typography
          variant="h6"
          style={{
            marginLeft: "1rem",
            marginBottom: "1rem",
            color: "red",
            fontSize: "0.9rem"
          }}
        >
          {product?.price?.formatted_with_symbol}
        </Typography>
        <div
          style={{ display: "flex", alignItems: "center", marginLeft: "1rem" }}
        >
          <div
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              background: "green"
            }}
          ></div>
          <p
            className="popular-products-title"
            style={{ fontSize: "0.75rem", marginLeft: "0.2rem" }}
          >
            Finns i lager
          </p>
        </div>
      </CardContent>
      <OnElementPop
        bottom={"2%"}
        right={"2%"}
        width={"70px"}
        height={"30px"}
        background={"red"}
        color={"white"}
        text={"Rea"}
      />
    </div>
  );
};

export default Product;
// name, num colors, price
