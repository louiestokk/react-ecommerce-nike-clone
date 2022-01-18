import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
} from "@material-ui/core";
import useStyles from "./styles";
import { Link } from "react-router-dom";
const Product = ({ product }) => {
  const { id, name, price, categories, image, description } = product;
  const classes = useStyles();
  return (
    <>
      <Card className={classes.root} component={Link} to={`/product/${id}`}>
        <CardMedia title={name} image={image.url} className={classes.media} />
      </Card>
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
