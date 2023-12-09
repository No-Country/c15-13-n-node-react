const {
    createProductService,
    getProductsService,
    getProductByIdService,
    modifyProductService,
    updateStockIncService,
    updateStockDecService,
    deleteProductService,
  } = require("../services/productService");

const asyncHandler = require("express-async-handler");

const createProductCtrl = asyncHandler(async (req, res) => {
  try {
    res.status(200).send(await createProductService(req.body));
  } catch (error) {
    console.log(error);
    res.status(400).send({ error });
  }
});

const getProductCtrl = asyncHandler(async (req, res) => {
    try {
      res.status(200).send(await getProductsService());
    } catch (error) {
      console.log(error);
      res.status(400).send({ error });
    }
});

const getPropductCtrlId = asyncHandler(async (req, res) => {
    try {
      res.status(200).send(await getProductByIdService(req.params));
    } catch (error) {
      console.log(error);
      res.status(400).send({ error });
    }
});

const updateProductCtrl= asyncHandler(async (req, res) => {
    try {
      res.status(200).send(await modifyProductService(req.params.id, req.body));
    } catch (error) {
      console.log(error);
      res.status(400).send({ error });
    }
  });

const updateStockIncCtrl = asyncHandler(async (req, res) => {
    try {
        const productId = req.params.id;
        const value = parseInt(req.params.value);
        res.status(200).send(await updateStockIncService(productId, value));
    } catch (error) {
      console.log(error);
      res.status(400).send({ error });
    }
});

const updateStockDecCtrl = asyncHandler(async (req, res) => {
    try {
        const productId = req.params.id;
        const value = parseInt(req.params.value);
        res.status(200).send(await updateStockDecService(productId, value));
    } catch (error) {
      console.log(error);
      res.status(400).send({ error });
    }
});

const deleteProductCtrl= asyncHandler(async (req, res) => {
    try {
      res.status(200).send(await deleteProductService(req.params));
    } catch (error) {
      console.log(error);
      res.status(400).send({ error });
    }
});

module.exports = {
    createProductCtrl,
    getProductCtrl,
    getPropductCtrlId,
    updateProductCtrl,
    updateStockIncCtrl,
    updateStockDecCtrl,
    deleteProductCtrl,
};
