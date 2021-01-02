import React from "react";
import { useDispatch } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { handleToken } from "./actions";

const Billings = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <StripeCheckout
        name="Emaily"
        description="$5 for 5 users feedback credits "
        amount={500}
        token={(token) => dispatch(handleToken(token))}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      >
        <button className="btn">Add Credits</button>
      </StripeCheckout>
    </div>
  );
};

export default Billings;
