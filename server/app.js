const morgan = require("morgan");
const express = require("express");
const app = express();
app.use(morgan("dev"));
app.use(express.json());

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());

require('./appRoots/routes')(app);
require('./appRoots/db');

module.exports = app;