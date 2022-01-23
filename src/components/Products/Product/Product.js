import React from "react";
import { CardContent, Typography } from "@material-ui/core";
import useStyles from "./styles";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
const Product = ({ product }) => {
  const { id, name, price, categories, image, description } = product;
  const classes = useStyles();
  return (
    <>
      <div className="singel-product-card">
        <img src={image.url} className={classes.media} id="media" alt={name} />
        <Link to={`/product/${id}`}>
          <div className="search-icon-cart">
            <FiSearch />
          </div>
        </Link>
      </div>
      <CardContent>
        <div className={classes.cardcontent}>
          <Typography variant="h6" gutterBottom className={classes.name}>
            {name}
          </Typography>
          <p style={{ color: "gray" }}>1 color</p>
          <p style={{ marginTop: "0.8rem" }}>{price.formatted_with_symbol}</p>
        </div>
      </CardContent>
    </>
  );
};

export default Product;
// name, num colors, price
