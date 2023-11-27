const { registerService, loginService } = require("../services/userService");
const asyncHandler = require("express-async-handler");

const registerCtrl = asyncHandler(async (req, res) => {
  try {
    res.status(200).send(await registerService(req.body));
  } catch (error) {
    console.log(error);
    res.status(400).send({ error });
  }
});

const loginCtrl = asyncHandler(async (req, res) => {
  try {
    res.status(200).send(await loginService(req.body));
  } catch (error) {
    console.log(error);
    res.status(400).send({ error });
  }
});

module.exports = {
  registerCtrl,
  loginCtrl,
};
