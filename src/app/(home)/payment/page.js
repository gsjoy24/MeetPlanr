import Payment from "@/Pricing/Payment";
import ButtonCheckout from "@/components/PayButton";
import Stripe from "stripe";

async function loadPrices() {
  const stripe= new Stripe (process.env.STRIPE_SECRET_KEY);
  const prices= await stripe.prices.list();
  const sortedPrices= prices.data.sort((a,b)=>a.unit_amount - b.unit_amount);

  return sortedPrices;
}
const page = async () => {
  const prices=await loadPrices();
  console.log(prices )
  return (
    <div>
   <h1>pricing</h1>
   {
    prices.map(price=>(
      <div key={price.id}>
        <h3>{ price.nickname}</h3>
        <h2>{price.unit_amount / 100} $</h2>
        <ButtonCheckout priceId={price.id} />
      </div>
    ))
   }
    </div>
  );
};

export default page;
