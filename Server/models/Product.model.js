const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const ProductSchema = Schema(
  {
    title: String,
    img: String,
    brand: String,
    rating: Number,
    review: Number,
    price: Number,
    isActive: Boolean,
    item_tag: String,
    category: String,
    inventory: Number,
  },
  { versionKey: false }
);

const ProductModel = model("product", ProductSchema);

module.exports = {
  ProductModel,
};
