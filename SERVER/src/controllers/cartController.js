const { getCartByIdService, fillCartService, deleteProductCartService } = require("../services/cartService");

const asyncHandler = require("express-async-handler");

const getCartCtrl = asyncHandler(async (req, res) => {
  try {
    const owner = req.user._id;
    res.status(200).send(await getCartByIdService(owner));
  } catch (error) {
    console.log(error);
    res.status(400).send({ error });
  }
});

const fillCartCtrl = asyncHandler(async (req, res) => {
  try {
    const owner = req.user._id;
    const { productId, quantity } = req.body;
    res.status(200).send(await fillCartService(owner, productId, quantity));
  } catch (error) {
    console.log(error);
    res.status(400).send({ error });
  }
});

const deleteProductCartCtrl = asyncHandler(async (req, res) => {
    try {
      const owner = req.user._id;
      const { productId } = req.query;
      res.status(200).send(await deleteProductCartService(owner, productId));
    } catch (error) {
      console.log(error);
      res.status(400).send({ error });
    }
});

module.exports = {
  getCartCtrl,
  fillCartCtrl,
  deleteProductCartCtrl,
};
