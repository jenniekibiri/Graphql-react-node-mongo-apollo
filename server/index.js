const express = require('express')
const mongoose = require('mongoose');
const morgan = require('morgan');
const app = express();
const port=5000
app.listen(port,console.log(`server running on port ${port}`))
