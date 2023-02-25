const express = require("express");
const { ProductModel } = require("../models/Product.model");

const ProductRouter = express.Router();

// GET ALL PRODUCTS
ProductRouter.get("/", async (req, res) => {
  try {
    const min = parseInt(req.query.min);
    const max = parseInt(req.query.max);
    const brand = req.query.brand;
    const page = parseInt(req.query.page) - 1 || 0;
    const limit = parseInt(req.query.limit) || 1000;
    const search = req.query.search || "";
    let category = req.query.category;

    const filters = [{ title: { $regex: search, $options: "i" } }];
    if (min) filters.push({ price: { $gte: min } });
    if (max) filters.push({ price: { $lte: max } });
    if (brand) filters.push({ brand: brand });
    if (category) filters.push({ category: category });

    const sortBy = {};
    if (req.query.price) sortBy["price"] = req.query.price;
    if (req.query.rating) sortBy["rating"] = req.query.rating;

    const products = await ProductModel.find({ $and: filters })
      .sort(sortBy)
      .skip(page * limit)
      .limit(limit);

    res.send(products);
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: true, message: "Internal Server Error" });
  }
});

// GET PRODUCTS BY SEARCH KEYWORD
ProductRouter.get("/search", async (req, res) => {
  try {
    const min = parseInt(req.query.min);
    const max = parseInt(req.query.max);
    const brand = req.query.brand;
    const page = parseInt(req.query.page) - 1 || 0;
    const limit = parseInt(req.query.limit) || 1000;
    const q = req.query.q || "";
    let category = req.query.category;

    const filters = [
      {
        $or: [
          { title: { $regex: q, $options: "i" } },
          { brand: { $regex: q, $options: "i" } },
        ],
      },
    ];

    if (min) filters.push({ price: { $gte: min } });
    if (max) filters.push({ price: { $lte: max } });
    if (brand) filters.push({ brand: brand });
    if (category) filters.push({ category: category });

    const sortBy = {};
    if (req.query.price) sortBy["price"] = req.query.price;
    if (req.query.rating) sortBy["rating"] = req.query.rating;

    const products = await ProductModel.find({ $and: filters })
      .sort(sortBy)
      .skip(page * limit)
      .limit(limit);

    res.send(products);
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: true, message: "Internal Server Error" });
  }
});

// GET SINGLE PRODUCT
ProductRouter.get("/:id", async (req, res) => {
  try {
    const data = await ProductModel.findById({ _id: ID });
    res.send(data);
  } catch (error) {
    console.log(error);
    res.status(400).send({ message: "Something went wrong", error });
  }
});

module.exports = { ProductRouter };
