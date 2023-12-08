const Product = require("../models/Product");
const { uploadImageCloud } = require("../utils/cloudinary");

const createProductService = async (data) => {
  const { name, reference, description, price, category, image } = data;
  const uploadedImage = image
    ? await uploadImageCloud(image)
    : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV8TrrnMZ9mo9lDemTXDLXxAJsY6hiqCKJ6w&usqp=CAU";

  const oldProduct = await Product.findOne({ reference });

  if (oldProduct) {
    return {
      msg: "El producto ya existe...",
    };
  }
  const product = await Product.create({
    name,
    reference,
    description,
    price,
    category,
    image: uploadedImage,
  });

  return {
    msg: "Producto registrado satisfactoriamente...",
    product,
  };
};

const getProductsService = async () => {
  const users = await Product.find({ status: true });
  return { users, status: true };
};

const getProductByIdService = async (data) => {
  const { id } = data;
  const user = await Product.findById(id);
  if (!user) {
    return {
      message: "Producto no encontrado...",
      status: false,
    };
  }
  return { user, status: true };
};

const modifyProductService = async (id, data) => {
  const { name, reference, description, price, category, image } = data;
  if (image) {
    const updatedImage = await uploadImageCloud(image);
    const updatedProduct = await User.findByIdAndUpdate(
      id,
      {
        name,
        reference,
        description,
        price,
        category,
        image: updatedImage,
      },
      {
        new: true,
      }
    );
    return {
      updatedProduct,
      msg: "Actualización satisfacotria...",
      success: true,
    };
  } else {
    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      {
        name,
        reference,
        description,
        price,
        category,
      },
      {
        new: true,
      }
    );
    return {
      updatedProduct,
      msg: "Actualización satisfacotria...",
      success: true,
    };
  }
};

const updateStockIncService = async (id, value) => {
  const product = await Product.findById(id);

  if (!product) {
    return {
      msg: "Producto no encontrado...",
      status: false,
    };
  }

  // Use the custom incrementQuantity method
  await product.incrementQuantity(value);

  return { product, success: true };
};

const updateStockDecService = async (id, value) => {
  const product = await Product.findById(id);

  if (!product) {
    return {
      msg: "Producto no encontrado...",
      status: false,
    };
  }

  // Use the custom incrementQuantity method
  await product.decrementQuantity(value);

  return { product, success: true };
};

const deleteProductService = async (data) => {
  const { id } = data;
  const delProduct = await Product.findById(id);
  if (!delProduct) {
    return {
      msg: "Producto no encontrado...",
    };
  }
  const deletedProduct = await Product.findByIdAndUpdate(
    id,
    {
      status: false,
    },
    {
      new: true,
    }
  );

  return deletedProduct;
};

module.exports = {
  createProductService,
  getProductsService,
  getProductByIdService,
  modifyProductService,
  updateStockIncService,
  updateStockDecService,
  deleteProductService,
};
