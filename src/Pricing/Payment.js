"use client";
import Container from "@/components/container";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

// TODO: Hide publishable key
const stripePromise = loadStripe(
   "pk_test_51Nk6XAH2Y0ZWJcH6rMYrh5temaJuoQugJIhm7Q1rRnTcILo5KWXXkG44Gry8LdJ7JdVB0ReM2s46P1xbnfiko1y500oWyevpXl"
);

const Payment = () => {
   return (
      <div className="mt-32">
         <Container>
            <h2 className="mb-5 text-3xl font-bold text-zinc-600">
               Payment Gateway
            </h2>

            <Elements stripe={stripePromise}>
               <CheckoutForm />
            </Elements>
         </Container>
      </div>
   );
};

export default Payment;
