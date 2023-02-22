const express = require("express");
const { ProductModel } = require("../models/Product.model");

const ProductRouter = express.Router();

ProductRouter.get("/", async (req, res) => {
  const data = await ProductModel.find();
  res.send(data);
});

module.exports = { ProductRouter };
