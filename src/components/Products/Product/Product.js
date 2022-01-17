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
const Product = ({ product }) => {
  const { id, name, price, categories, image, description } = product;
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardMedia title={name} image={image.url} className={classes.media} />
      <CardContent>
        <div>
          <Typography variant="h6" gutterBottom>
            {name}
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
};

export default Product;
