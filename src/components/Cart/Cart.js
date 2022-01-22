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
        <div className={classes.cardDetails}>
          <Typography variant="h6">
            Subtotal: {cart.subtotal.formatted_with_symbol}
          </Typography>
          {user ? (
            <div>
              <Button
                className={classes.emptyButton}
                size="medium"
                type="button"
                variant="contained"
                color="secondary"
                onClick={handleEmptyCart}
              >
                Empty cart
              </Button>
              <Button
                className={classes.checkoutButton}
                size="medium"
                type="button"
                variant="contained"
                color="primary"
                component={Link}
                to="/checkout"
              >
                Checkout
              </Button>
            </div>
          ) : (
            <Button
              className={classes.loginButton}
              size="medium"
              type="button"
              variant="contained"
              onClick={loginWithRedirect}
            >
              Login
            </Button>
          )}
        </div>
      </>
    );
  };
  if (!cart.line_items) return "Loading...";
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
