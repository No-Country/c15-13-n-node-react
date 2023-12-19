const User = require("../models/User");
const { generateToken } = require("../config/jwtToken");
const { uploadImageCloud } = require("../utils/cloudinary");
require("dotenv").config();

const registerService = async (data) => {
  const { firstName, lastName, email, mobile, avatar, password } = data;
  const uploadedImage = avatar
    ? await uploadImageCloud(avatar)
    : process.env.AVATAR_IMG;

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
    avatar: uploadedImage,
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
      role: findUser?.role,
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

const logoutService = async(data) =>{
  data.token = "";
  await data.save();
  return {
    msg:"Se ha cerrado sesión...",
    success: true,
  }
}

const getUsersService = async () => {
  const users = await User.find();
  return users;
};

const getAllUserByIdService = async (data) => {
  const user = await User.findOne({ _id: data });
  if (!user) {
    return {
      message: "Usuario no encontrado...",
      status: false,
    };
  }
  return user;
};

const modifyUsersService = async (id, data) => {
  const { firstName, lastName, email, mobile, avatar } = data;

  if (avatar) {
    const updatedImage = await uploadImageCloud(avatar);
    const updatedUser = await User.findByIdAndUpdate(
      id,
      {
        firstName,
        lastName,
        email,
        mobile,
        avatar: updatedImage,
      },
      {
        new: true,
      }
    );
    return updatedUser;
  } else {
    const updatedUser = await User.findByIdAndUpdate(
      id,
      {
        firstName,
        lastName,
        email,
        mobile,
      },
      {
        new: true,
      }
    );
    return updatedUser;
  }
};

const deleteUsersService = async (id) => {
  const delUser = await User.findOne({ _id: id });
  if (!delUser) {
    return {
      msg: "Usuario no encontrado...",
    };
  }
  const deletedtedUser = await User.findByIdAndUpdate(
    id,
    {
      status: false,
    },
    {
      new: true,
    }
  );

  return deletedtedUser;
};

module.exports = {
  registerService,
  loginService,
  logoutService,
  getUsersService,
  getAllUserByIdService,
  modifyUsersService,
  deleteUsersService,
};
