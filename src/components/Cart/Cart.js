import React from "react";
import useStyles from "./styles";
import { Container, Typography, Button, Grid } from "@material-ui/core";
import CartItem from "./CartItem/CartItem";
import { Link } from "react-router-dom";
import { useUserContext } from "../../context/user_context";
const Cart = ({ updateCartQty, removeFromCart, handleEmptyCart, cart }) => {
  const classes = useStyles();
  const { user, loginWithRedirect } = useUserContext();
  const EmptyCart = () => {
    return (
      <Typography variant="subtitle1">
        You have no items in your shopping cart
        <br />
        <Link to="/products" className={classes.link}>
          start adding items
        </Link>
      </Typography>
    );
  };

  const FilledCart = () => {
    return (
      <>
        <Grid container spacing={3}>
          {cart.line_items.map((item) => {
            return (
              <Grid item xs={12} sm={4} key={item.id}>
                <CartItem
                  item={item}
                  removeFromCart={removeFromCart}
                  updateCartQty={updateCartQty}
                />
              </Grid>
            );
          })}
        </Grid>
        <div className={classes.cardDetails} id="cart-total-content">
          <div>
            <p style={{ letterSpacing: "1px" }}>
              Ord. pris kr{Math.floor(cart.subtotal.raw * 1.5)}.00
            </p>
            <p style={{ color: "red" }}>
              Rabatt {Math.floor(cart.subtotal.raw * 1.5) - cart.subtotal.raw}kr
            </p>
            <p>Frakt 0kr</p>
            <h4>Subtotal: {cart.subtotal.formatted_with_symbol}</h4>
          </div>
        </div>
        <div style={{ marginTop: "0.5rem" }}>
          <Button
            className={classes.checkoutButton}
            size="large"
            type="button"
            variant="contained"
            color="primary"
            component={Link}
            to="/checkout"
          >
            Till Kassan
          </Button>
        </div>
      </>
    );
  };
  if (!cart?.line_items) return "Loading...";
  return (
    <Container>
      <div className={classes.toolbar} />
      <Typography className={classes.title} variant="h6" gutterBottom>
        Your shopping cart
      </Typography>
      {!cart.line_items.length ? <EmptyCart /> : <FilledCart />}
    </Container>
  );
};

export default Cart;
