import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProductsContext } from "../../../context/products_context";
import useStyles from "./styles";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
  Grid,
} from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";
const SingelProduct = () => {
  const [index, setIndex] = useState(0);
  const [active, setActive] = useState(false);
  const { products } = useProductsContext();
  const { id } = useParams();
  const [product, setProduct] = useState(
    products.filter((el) => el.id == id)[0]
  );

  const classes = useStyles();

  const handleActive = (e, index) => {
    setIndex(index);
  };

  return (
    <Grid item className={classes.root}>
      <Typography
        variant="h5"
        style={{ marginLeft: "1rem", marginBottom: "0.6rem" }}
      >
        {product.name}
      </Typography>
      <Typography
        variant="h6"
        style={{ marginLeft: "1rem", marginBottom: "1rem", fontSize: "1rem" }}
      >
        {product.price.formatted_with_symbol}
      </Typography>
      <CardMedia
        className={classes.media}
        title={product.name}
        image={product.assets[index].url}
      />
      <div className={classes.mediaCont}>
        {product.assets.map((el, ind) => {
          return (
            <div key={el.id}>
              <div
                key={ind}
                style={{
                  opacity: index === ind && "0.6",
                }}
                className={classes.images}
                onClick={(e) => handleActive(e, ind)}
              >
                <img src={el.url} className={classes.image} />
              </div>
            </div>
          );
        })}
      </div>
      <div className={classes.sizeCont}></div>
      <p>
        The Nike Dri-FIT T-Shirt is made with soft fabric that wicks sweat to
        help keep you comfortable and dry from your first stretch through your
        last set. Slub texture has a broken-in look and feel.
      </p>
    </Grid>
  );
};

export default SingelProduct;
// jag kan ta products från context och baar köra filter
// välj storlek måste lägga in size 36,36,38 på utvald product samma som den med många bilder
// render knappar med storlekar
// lägg till korg knapp som måste regist vilken product genom id och storlek
// knapp till add favorite men måste va inloggad, samma där spara favorite o localstorage eller kolla commrce om de har stöd
// lagra det man lagt till i korgen , men dettta gör commerce
