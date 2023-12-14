const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;
const Cart = require("../models/Cart");
const Product = require("../models/Product");

const getCartByIdService = async (user) => {
  const cart = await Cart.findOne({ user });
  if (!cart) {
    return {
      message: "Carrito no encontrado...",
      status: false,
    };
  }

  return { cart, status: true };
};

const fillCartService = async (user, productId, quantity) => {
  const cart = await Cart.findOne({ user });
  const product = await Product.findOne({ _id: productId });
  if (!product) {
    return {
      message: "Producto no encontrado...",
      status: false,
    };
  }

  const price = product.price;
  const name = product.name;

  //If cart already exists for user,

  if (cart) {
    const productIndex = cart.products.findIndex(
      (product) => product.product._id.toString() === productId
    );

    //check if product exists or not

    if (productIndex > -1) {
      let product = cart.products[productIndex];
      product.quantity += quantity;
      cart.totalPrice = cart.products.reduce((acc, curr) => {
        return acc + curr.quantity * curr.price;
      }, 0);
      cart.products[productIndex] = product;
      await cart.save();
      return {
        cart,
        success: true,
      };
    } else {
      cart.products.push({ product: productId, name, quantity, price });
      cart.totalPrice = cart.products.reduce((acc, curr) => {
        return acc + curr.quantity * curr.price;
      }, 0);
      await cart.save();
      return {
        cart,
        success: true,
      };
    }
  } else {
    //no cart exists, create one
    const newCart = await Cart.create({
      user,
      products: [{ product: productId, name, quantity, price }],
      totalPrice: quantity * price,
    });

    return {
      newCart,
      success: true,
    };
  }
};

const deleteProductCartService = async (user, productId) => {
  let cart = await Cart.findOne({ user });
  const productIndex = cart.products.findIndex(
    (product) => product.product._id.toString() === productId
  );
  if (productIndex > -1) {
    let product = cart.products[productIndex];
    cart.totalPrice -= product.quantity * product.price;
    if (cart.totalPrice < 0) {
      cart.totalPrice = 0;
    }
    cart.products.splice(productIndex, 1);
    cart.totalPrice = cart.products.reduce((acc, curr) => {
      return acc + curr.quantity * curr.price;
    }, 0);
    cart = await cart.save();
    return {
      cart,
      success: true,
    };
  } else {
    return {
      msg: "Producto no encontrado...",
      success: false,
    };
  }
};

module.exports = {
  getCartByIdService,
  fillCartService,
  deleteProductCartService,
};
