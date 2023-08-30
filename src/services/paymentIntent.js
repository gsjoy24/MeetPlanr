const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const calculateOrderAmount = (items) => {
   return 1400;
};

export const handler = async (req, res) => {
  const { items } = req.body;
  const amount = items*100;

    const paymentIntent = await stripe.paymentIntents.create({
      amount: calculateOrderAmount(items),
      currency: "usd",
      automatic_payment_methods: {
        enabled: true,
      },
      payment_method_type: ['card']
    });

    res.send({
      clientSecret: paymentIntent.client_secret,
    });
};
