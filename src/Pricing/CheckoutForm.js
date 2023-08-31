import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";


const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement)
    if (card === null) {
      return;
    }
    
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card
    })
    if (error) {
      setCardError(error.message);
      console.log('error', error);
    }
    else {
      setCardError('');
      console.log('payment method', paymentMethod);
    }
  }

  return (
     <div className="w-[400px]">
        <form onSubmit={handleSubmit}>
           <CardElement
              options={{
                 style: {
                    base: {
                       fontSize: "16px",
                       color: "#424770",
                       "::placeholder": {
                          color: "#aab7c4",
                     },
                    },
                    invalid: {
                       color: "#9e2146",
                    },
                 },
              }}
           />
           <button
              type="submit"
              disabled={!stripe}
              className="font-semibold mt-3 border px-4 py-[2px] rounded-full border-[#465AF7] text-[#465AF7] hover:bg-[#ebf0f7]"
           >
              Pay
           </button>
      </form>
      {cardError && <p className="text-[15px] text-rose-500 font-semibold mt-3">{cardError}</p>}
     </div>
  );
};

export default CheckoutForm;
