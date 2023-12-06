const {
  registerService,
  loginService,
  logoutService,
  getUsersService,
  getAllUserByIdService,
  modifyUsersService,
  deleteUsersService,
} = require("../services/userService");
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

const logoutCtrl = asyncHandler(async (req, res) => {
  try {
    res.status(200).send(await logoutService(req.user));
  } catch (error) {
    console.log(error);
    res.status(400).send({ error });
  }
});

const getUserCtrl = asyncHandler(async (req, res) => {
  try {
    res.status(200).send(await getUsersService());
  } catch (error) {
    console.log(error);
    res.status(400).send({ error });
  }
});

const getUserCtrlId = asyncHandler(async (req, res) => {
  try {
    res.status(200).send(await getAllUserByIdService(req.params));
  } catch (error) {
    console.log(error);
    res.status(400).send({ error });
  }
});

const updateUserCtrl= asyncHandler(async (req, res) => {
  try {
    res.status(200).send(await modifyUsersService(req.user.id, req.body));
  } catch (error) {
    console.log(error);
    res.status(400).send({ error });
  }
});

const deleteUserCtrl= asyncHandler(async (req, res) => {
  try {
    res.status(200).send(await deleteUsersService(req.params));
  } catch (error) {
    console.log(error);
    res.status(400).send({ error });
  }
});

module.exports = {
  registerCtrl,
  loginCtrl,
  logoutCtrl,
  getUserCtrl,
  getUserCtrlId,
  updateUserCtrl,
  deleteUserCtrl,
};
