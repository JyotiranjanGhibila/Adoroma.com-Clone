const express = require("express");
const { connection } = require("./configs/db");
const { UserRouter } = require("./routes/User.route");
const { ProductRouter } = require("./routes/Product.route");
const { CartRouter } = require("./routes/Cart.route");
const { AdminRouter } = require("./routes/Admin.route");
require("dotenv").config();
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// HOME
app.get("/", (req, res) => {
  res.send("ELECTRO GLAD");
});

// ROUTES
app.use("/api/users", UserRouter);
app.use("/api/products", ProductRouter);
app.use("/api/cart", CartRouter);
app.use("/api/admin", AdminRouter);

app.listen(4500, async () => {
  try {
    await connection;
    console.log("CONNECTED TO DB");
  } catch (error) {
    console.log(error);
  }
  console.log("RUNNING AT PORT 4500");
});
