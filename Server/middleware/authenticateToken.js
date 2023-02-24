const jwt = require("jsonwebtoken");
require("dotenv").config;

const authenticateToken = (req, res, next) => {
  const token = req.headers.authorization;
  if (token) {
    jwt.verify(token, "secret", (err, decoded) => {
      if (err) res.status(401).send({ message: "Authorization failed " });
      req.body.user = decoded.userID;
      next();
    });
  } else {
    res.send({ message: "Please login first" });
  }
};

module.exports = { authenticateToken };
