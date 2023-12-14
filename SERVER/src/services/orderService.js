const Cart = require("../models/Cart");

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

module.exports = { getOrderByIdService };
