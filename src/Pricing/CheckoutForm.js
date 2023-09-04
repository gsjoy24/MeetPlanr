import { UserAuth } from "@/providers/AuthProvider";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import { useEffect, useState } from "react";


const CheckoutForm = ({price}) => {
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState('');
  const { user } = UserAuth();
  const [clientSecret, setClientSecret] = useState('');
  const [processing, setProcessing] = useState(false);

  useEffect(() => {
   async function fetchClientSecret() {
     try {
       const response = await axios.post('/api/create-payment-intent', { price });
       setClientSecret(response.data.clientSecret);
     } catch (error) {
       // Handle error
     }
   }

   fetchClientSecret();
 }, [price]);



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
    setProcessing(true);
    const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
      clientSecret,
      {
          payment_method: {
              card: card,
              billing_details: {
                  email: user?.email || 'unknown',
                  name: user?.displayName || 'anonymous'
              },
          },
      },
  );
  if (confirmError) {
   console.log(confirmError);
}

console.log('payment intent', paymentIntent)
setProcessing(false)

if (paymentIntent.status === 'succeeded'){

   setTransactionId(paymentIntent.id);
   const payment = {
      email: user?.email,
      transactionId: paymentIntent.id,
      price,
      date: new Date(),
   }
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
              disabled={!stripe || !clientSecret || processing}
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
