const User = require("../models/User");
const { generateToken } = require("../config/jwtToken");

const registerService = async (data) => {
  const { firstName, lastName, email, mobile, password } = data;

  const oldUser = await User.findOne({ email });

  if (oldUser) {
    return {
      msg: "Usuario ya existe...",
    };
  }
  const user = await User.create({
    firstName,
    lastName,
    email,
    mobile,
    password,
  });

  return {
    msg: "Usuario creado satisfactoriamente...",
    user,
  };
};

const loginService = async (data) => {
  const { email, password } = data;
  const findUser = await User.findOne({ email });
  if (findUser && (await findUser.isPasswordMatched(password))) {
    return {
      _id: findUser?._id,
      firstname: findUser?.firstName,
      lastname: findUser?.lastName,
      email: findUser?.email,
      mobile: findUser?.mobile,
      token: generateToken(findUser?._id),
      success: true,
    };
  } else {
    return {
      msg: "Credendiales invalidas...",
      success: false,
    };
  }
};

module.exports = { registerService, loginService };
