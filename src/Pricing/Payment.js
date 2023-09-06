"use client"
import Container from "@/components/container";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

// TODO: Hide publishable key
const stripePromise = loadStripe(
   "pk_test_51NFNxjHuGsIG1Iu35VhVMBwu8ICI8j6klaeXXurMKzvW3ENLZPLAo6fUmeNYjwpoAKe452SHAdHxG2FCe43d9e6q00OwDrWiPJ"
);

const Payment = () => {

   return (
      <div className="mt-32">
         <Container>
            <h2 className="mb-8  text-3xl font-bold text-zinc-600">
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
