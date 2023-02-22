const express = require("express");
const { ProductModel } = require("../models/Product.model");

const ProductRouter = express.Router();

ProductRouter.get("/", async (req, res) => {
  try {
    // FILTER
    const query = {};
    if (req.query.category) query.category = req.query.category;
    if (req.query.brand) query.brand = req.query.brand;

    ProductModel.find(query, (err, data) => {
      if (err) {
        res.send({ error: err });
      } else {
        res.send(data);
      }
    });
  } catch (error) {
    res.send({ error: error });
  }
});

module.exports = { ProductRouter };
