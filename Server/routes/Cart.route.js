const express = require("express");
const { CartModel } = require("../models/Cart.model");
const { authenticateToken } = require("../middleware/authenticateToken");
const { ProductModel } = require("../models/Product.model");

const CartRouter = express.Router();

CartRouter.use(authenticateToken);

// GET CART
CartRouter.get("/", async (req, res) => {
  const owner = req.body.user;

  try {
    const cart = await CartModel.findOne({ owner });

    // IF CART EXISTS
    if (cart) {
      res.send(cart);
    } else {
      // IF NOT EXISTS
      const created_cart = new CartModel({ owner, items: [], bill: 0 });
      await created_cart.save();
      res.send(created_cart);
    }
  } catch (error) {
    console.log(error);
    res.status(400).send({ message: "Something went wrong", error });
  }
});

// ADD TO CART
CartRouter.post("/add-to-cart", async (req, res) => {
  const owner = req.body.user;
  const { itemId, quantity } = req.body;

  try {
    let cart = await CartModel.findOne({ owner });
    let item = await ProductModel.findOne({ _id: itemId });

    // IF ITEM ID IS NOT VAILD
    if (!item) {
      res.status(400).send({ message: "item not found" });
      return;
    }

    const price = item.price;
    const title = item.title;

    const itemIndex = cart.items.findIndex((item) => item.itemId == itemId);

    // IF ITEM ALREADY EXISTS INCREASE THE QUANTITY
    if (itemIndex > -1) {
      let product = cart.items[itemIndex];
      product.quantity = quantity;
      cart.items[itemIndex] = product;

      cart.bill = cart.items.reduce((acc, item) => {
        return acc + item.price * item.quantity;
      }, 0);

      await cart.save();
      res.send(cart);
    } else {
      // IF ITEM IS NOT IN CART
      cart.items.push({ itemId, title, price, quantity });
      cart.bill = cart.items.reduce((acc, item) => {
        return acc + item.price * item.quantity;
      }, 0);

      await cart.save();
      res.send(cart);
    }
  } catch (error) {
    console.log(error);
    res.status(400).send({ message: "Something went wrong", error });
  }
});

CartRouter.delete("/:itemId", async (req, res) => {
  const owner = req.body.user;
  const itemId = req.params.itemId;

  try {
    let cart = await CartModel.findOne({ owner });

    const itemIndex = cart.items.findIndex((item) => item.itemId == itemId);

    // IF ITEM IS PRESENT
    if (itemIndex > -1) {
      cart.items.splice(itemIndex, 1);
      cart.bill = cart.items.reduce((acc, item) => {
        return acc + item.price * item.quantity;
      }, 0);

      // SAVE THE CART
      await cart.save();
      res.send(cart);
    } else {
      res.status(400).send({ message: "Item not found in cart" });
    }
  } catch (error) {
    console.log(error);
    res.status(400).send({ message: "Something went wrong", error });
  }
});

module.exports = { CartRouter };
