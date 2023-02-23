const express = require("express");
const { ProductModel } = require("../models/Product.model");

const ProductRouter = express.Router();

// GET ALL PRODUCTS
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

// GET SINGLE PRODUCT
ProductRouter.get("/:id", async (req, res) => {
  const ID = req.params.id;

  try {
    const data = await ProductModel.findById({ _id: ID });
    res.send(data);
  } catch (error) {
    console.log(error);
    res.status(400).send({ message: "Something went wrong", error });
  }
});

module.exports = { ProductRouter };
