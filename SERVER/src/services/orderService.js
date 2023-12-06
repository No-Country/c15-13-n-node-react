const Order = require("../models/Order");

const getOrderByIdService = async (user) => {
  const order = await Order.find({ user }).sort({ date: -1 });
  if (!order) {
    return {
      message: "Orden no registrada...",
      status: false,
    };
  }
  return { order, status: true };
};

module.exports = { getOrderByIdService };
