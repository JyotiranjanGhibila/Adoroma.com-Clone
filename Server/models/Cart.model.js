const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const CartSchema = Schema(
  {
    owner: { type: Schema.Types.ObjectId, ref: "user", required: true },
    items: [
      {
        itemId: {
          type: Schema.Types.ObjectId,
          ref: "product",
          required: true,
        },
        title: String,
        quantity: {
          type: Number,
          required: true,
          min: 1,
          default: 1,
        },
        price: Number,
      },
    ],
    bill: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  { versionKey: false }
);

const CartModel = model("cart", CartSchema);

module.exports = {
  CartModel,
};
