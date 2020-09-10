const morgan = require("morgan");
const express = require("express");
const app = express();
app.use(morgan("dev"));

require('./roots/routes')(app);
require('./roots/db');

module.exports = app;