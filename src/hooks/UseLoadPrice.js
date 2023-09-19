import Stripe from 'stripe';

const UseLoadPrice = async() => {
    const stripe = new Stripe (process.env.STRIPE_SECRET_KEY);
	const prices = await stripe.prices.list();
	const sortedPrices = prices.data.sort((a,b)=>a.unit_amount - b.unit_amount);
	return sortedPrices;
};

export default UseLoadPrice;