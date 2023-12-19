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

  if (quantity > product.stock) {
    return {
      message: "No hay suficiente existencia verifique la cantidad...",
      status: false,
    };
  }
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
      let tot = cart.products.map((prod) => prod.quantity);
      cart.totalProducts = tot.reduce((total, number) => total + number, 0);
      await Product.findByIdAndUpdate(productId, {
        $inc: { stock: -quantity },
      });
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
      let tot = cart.products.map((prod) => prod.quantity);
      cart.totalProducts = tot.reduce((total, number) => total + number, 0);
      await Product.findByIdAndUpdate(productId, {
        $inc: { stock: -quantity },
      });
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
    let tot = newCart.products.map((prod) => prod.quantity);
    newCart.totalProducts = tot.reduce((total, number) => total + number, 0);
    await Product.findByIdAndUpdate(productId, {
      $inc: { stock: -quantity },
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
    let tot = cart.products.map((prod) => prod.quantity);
    cart.totalProducts = tot.reduce((total, number) => total + number, 0);
    await Product.findByIdAndUpdate(productId, {
      $inc: { stock: product.quantity },
    });
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

const deleteCartService = async (cart) => {
  const cartFound = await Cart.findOne({ _id: cart.id });
  if (!cartFound) {
    return {
      message: "Carrito no encontrado...",
      status: false,
    };
  }
  const cartDelete = await Cart.deleteOne({ _id: cart.id });
  if (!cartDelete) {
    return {
      message: "Error al eliminar el carrito...",
      status: false,
    };
  }
  return { msg: "Carrito eliminado...", status: true };
};

module.exports = {
  getCartByIdService,
  fillCartService,
  deleteProductCartService,
  deleteCartService,
};
