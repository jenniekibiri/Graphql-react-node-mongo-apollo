const { constants } = require("buffer");
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
const graphl = require("express-graphql");
const schema = require('./schema/schema')
const dotenv = require("dotenv").config();
const app = express();
mongoose.connect(process.env.TESTDB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.once("open", () => {
  console.log("db connected");
});
app.use(morgan('dev'))
app.use('/graphl',graphl(
  {  schema,
    graphiql: true}
))


const port = 5000;
app.listen(port, console.log(`server running on port ${port}`));
