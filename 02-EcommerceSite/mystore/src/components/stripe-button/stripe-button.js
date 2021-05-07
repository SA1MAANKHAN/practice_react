import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51IdaCjSD22OeoCfzvUfHuhmecepHlndBeEZXuV6NvLFObAVg4gjbPkOTDREf1fau5lXuQyknmzK92kOL0f7J07hD0036IKX4EK";
  const onToken = (token) => {
    console.log(token);
    alert("Payment Done Dna Done! ");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Salmaan's E-commerce"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
