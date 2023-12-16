const Cart = require("../models/Cart");
const Stripe = require("stripe");

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const getOrderByIdService = async (user) => {
  const order = await Cart.findOne({ user });
  if (!order) {
    return {
      message: "Orden no encontrada...",
      status: false,
    };
  }

  return { order, status: true };
};

const createSessionService = async (order) => {
  const { OrderId } = order;

  const cart = await Cart.findOne({ _id: OrderId });
  if (!cart) {
    return {
      msg: "Carrito no encontrado...",
      success: false,
    };
  }

  if (cart.products.length === 0) return;

  const lineItems = cart.products.map((product) => ({
    price_data: {
      product_data: {
        name: product.name,
      },
      currency: "usd",
      unit_amount: product.price * 100, // Stripe expects amounts in cents
    },
    quantity: product.quantity,
  }));
    const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: lineItems,
    mode: "payment",
    success_url: `${process.env.CLIENT_URL}/checkout-success`, 
    cancel_url: `${process.env.CLIENT_URL}/cart`,        
    metadata: {
      description: 'Payment Tienda Verde',
    },
  });
  return {
    url: session.url,
  };
};  
// https://www.youtube.com/watch?v=72iEz5iopqQ
module.exports = { getOrderByIdService, createSessionService };
