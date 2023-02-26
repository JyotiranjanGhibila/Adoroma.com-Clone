const express = require("express");
const { ProductModel } = require("../models/Product.model");
const { UserModel } = require("../models/User.model");

const AdminRouter = express.Router();

AdminRouter.get("/users", async (req, res) => {
  try {
    const data = await UserModel.find();
    res.send(data);
  } catch (error) {
    console.log(error);
    res.status(400).send({ message: "something went wrong", error });
  }
});

AdminRouter.post("/create", async (req, res) => {
  const ID = req.params.id;

  try {
    const product_to_add = new ProductModel(req.body);
    await product_to_add.save();
    res.send({ message: "Added successfully" });
  } catch (error) {
    console.log(error);
    res.status(400).send({ message: "something went wrong", error });
  }
});

AdminRouter.patch("/update/:id", async (req, res) => {
  const ID = req.params.id;

  try {
    await ProductModel.findByIdAndUpdate({ _id: ID }, req.body);
    res.send({ message: "Updated successfully" });
  } catch (error) {
    console.log(error);
    res.status(400).send({ message: "something went wrong", error });
  }
});

AdminRouter.delete("/delete/:id", async (req, res) => {
  const ID = req.params.id;

  try {
    await ProductModel.findByIdAndDelete({ _id: ID });
    res.send({ message: "Deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(400).send({ message: "something went wrong", error });
  }
});

module.exports = { AdminRouter };
