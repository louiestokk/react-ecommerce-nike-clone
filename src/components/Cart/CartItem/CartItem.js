import React from "react";
import {
  Typography,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia
} from "@material-ui/core";
import useStyles from "./styles";
const CartItem = ({ item, removeFromCart, updateCartQty }) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardMedia
        image={item.image.url}
        alt={item.name}
        className={classes.media}
      />
      <div>
        <CardContent className={classes.cardContent}>
          <h4>{item.name}</h4>
          <h5>{item.line_total.formatted_with_symbol}</h5>
        </CardContent>
        <CardActions className={classes.cardActions}>
          <div className={classes.buttons}>
            <Button
              type="button"
              size="small"
              onClick={() => updateCartQty(item.id, item.quantity - 1)}
            >
              -
            </Button>
            <Typography>{item.quantity}</Typography>
            <Button
              type="button"
              size="small"
              onClick={() => updateCartQty(item.id, item.quantity + 1)}
            >
              +
            </Button>
          </div>
          {/* <Button
            type="button"
            color="secondary"
            size="small"
            variant="contained"
            onClick={() => removeFromCart(item.id)}
          >
            remove
          </Button> */}
        </CardActions>
      </div>
    </Card>
  );
};

export default CartItem;
