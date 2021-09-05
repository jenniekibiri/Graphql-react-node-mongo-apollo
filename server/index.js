const { constants } = require("buffer");
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
const graphl = require("express-graphql");
const dotenv = require("dotenv").config();
mongoose.connect(process.env.TESTDB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.once("open", () => {
  console.log("db connected");
});

const app = express();
const port = 5000;
app.listen(port, console.log(`server running on port ${port}`));
