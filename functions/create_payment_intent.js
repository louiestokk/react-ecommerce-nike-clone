require("dotenv").config();

const stripe = require("stripe")(process.env.REACT_APP_STRIPE_SECRET_KEY);
exports.handler = async function (event) {
  if (event.body) {
    const { totalamount } = JSON.parse(event.body);
    calculateOrderAmount = () => {
      return totalamount / 100;
    };
    try {
      const paymentIntent = await stripe.paymentIntents.create({
        amount: totalamount,
        currency: "usd",
      });
      return {
        statusCode: 200,
        body: JSON.stringify({ clientSecret: paymentIntent.client_secret }),
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: JSON.stringify({ msg: error.message }),
      };
    }
  }
  return {
    statusCode: 200,
    body: "Create payment intent",
  };
};
