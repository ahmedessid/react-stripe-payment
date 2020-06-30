import React from "react";
import StripeCheckout from "react-stripe-checkout";
import "react-toastify/dist/ReactToastify.css";
import "./styles.css";

export default function App() {
  const [product] = React.useState({
    name: "Tesla Roadster",
    price: 64998.67,
    description: "Cool car"
  });
  function handleToken(token, addresses) {
    console.log({ token, addresses });
  }
  return (
    <div className="container">
      <div className="product">
        <h1>{product.name}</h1>
        <h3>On Sale · ${product.price}</h3>
      </div>
      <StripeCheckout
        stripeKey="pk_test_87jnzXpQPTImCZznmE3uBtSP00CQfSVLdA"
        token={handleToken}
        billingAddress
        description="Awesome Product"
        amount={product.price * 50}
      />
    </div>
  );
}
