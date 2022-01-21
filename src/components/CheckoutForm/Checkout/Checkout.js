import React, { useState, useEffect } from "react";
import PaymentForm from "../PaymentForm";
import AdressForm from "../AdressForm";
import { Link, useNavigate } from "react-router-dom";
import {
  Paper,
  Stepper,
  Step,
  StepLabel,
  Typography,
  CircularProgress,
  Divider,
  Button,
  CssBaseline,
} from "@material-ui/core";
import { commerce } from "../../lib/commerce";
import usestyles from "./styles";
const steps = ["Shipping adress", "Payment details"];
const Checkout = ({ cart, captureCheckout, order, errorMessage }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [checkoutToken, setCheckoutToken] = useState(null);
  const [shippingData, setShippingData] = useState({});
  const [isFinish, setIsFinish] = useState(false);
  const navigate = useNavigate();
  const classes = usestyles();
  useEffect(() => {
    const generateToken = async () => {
      try {
        const token = await commerce.checkout.generateToken(cart.id, {
          type: "cart",
        });
        setCheckoutToken(token);
      } catch (error) {
        navigate("/");
      }
    };
    generateToken();
  }, [cart]);

  const nextStep = () => {
    setActiveStep((prev) => prev + 1);
  };
  const backStep = () => {
    setActiveStep((prev) => prev - 1);
  };

  const next = (data) => {
    setShippingData(data);
    nextStep();
  };
  const timeout = () => {
    setTimeout(() => {
      setIsFinish(true);
    }, 3000);
  };
  const Form = () =>
    activeStep === 0 ? (
      <AdressForm checkoutToken={checkoutToken} />
    ) : (
      <PaymentForm
        shippingData={shippingData}
        checkoutToken={checkoutToken}
        backStep={backStep}
        captureCheckout={captureCheckout}
        nextStep={nextStep}
        timeout={timeout}
      />
    );
  let Confirmation = () =>
    order.customer ? (
      <>
        <div>
          <Typography variant="h5">
            Thank you for your purchase, {order.customer.firstname}
            {order.customer.lastname}
          </Typography>
        </div>
        <Divider className={classes.divider} />
        <Typography variant="subtitle2">
          Order red: {order.customer_reference}
        </Typography>
        <br />
        <Button variant="outlined" type="button" component={Link} to="/">
          Back home
        </Button>
      </>
    ) : isFinish ? (
      <>
        <div>
          <Typography variant="h5">Thank you for your purchase</Typography>
        </div>
        <Divider className={classes.divider} />

        <br />
        <Button variant="outlined" type="button" component={Link} to="/">
          Back home
        </Button>
      </>
    ) : (
      <div className={classes.spinner}>
        <CircularProgress />
      </div>
    );
  if (errorMessage) {
    return (
      <>
        <Typography variant="h5">Error: {errorMessage}</Typography>
        <Button variant="outlined" type="button" component={Link} to="/">
          Back home
        </Button>
      </>
    );
  }
  return (
    <>
      <CssBaseline />
      <div className={classes.toolbar} />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography variant="h5" align="center">
            Checkout
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((step) => {
              return (
                <Step key={step}>
                  <StepLabel>{step}</StepLabel>
                </Step>
              );
            })}
          </Stepper>
          {activeStep === steps.length ? (
            <Confirmation />
          ) : (
            checkoutToken && <Form />
          )}
        </Paper>
      </main>
    </>
  );
};

export default Checkout;
