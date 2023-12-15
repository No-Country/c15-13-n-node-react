const {
  getOrderByIdService,
  createSessionService,
} = require("../services/orderService");

const asyncHandler = require("express-async-handler");

const getOrderCtrl = asyncHandler(async (req, res) => {
  try {
    const owner = req.user._id;
    res.status(200).send(await getOrderByIdService(owner));
  } catch (error) {
    console.log(error);
    res.status(400).send({ error });
  }
});

const createSessionCtrl = asyncHandler(async (req, res) => {
  try {  
   res.status(200).send(await createSessionService(req.body));
  } catch (error) {
    console.log(error);
    res.status(400).send({ error });
  }
});

module.exports = {
  getOrderCtrl,
  createSessionCtrl,
};
