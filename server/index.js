const { constants } = require("buffer");
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
const graphqlHTTP = require("express-graphql");
const schema = require('./schema/schema')
const dotenv = require("dotenv").config();
const app = express();
app.use(cors());
mongoose.connect(process.env.TESTDB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.once("open", () => {
  console.log("db connected");
});
app.use(morgan('dev'))
app.use('/graphql',graphqlHTTP(
  {  schema,
    graphiql: true}
))


const port = 5000;
app.listen(port, console.log(`server running on port ${port}`));
