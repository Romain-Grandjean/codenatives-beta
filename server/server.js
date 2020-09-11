const morgan = require("morgan");
const express = require('express');
const config = require('config');
const app = express();
app.use(morgan("dev"));

require('./server/routes')(app);
require('./server/db');

const port = process.env.PORT || config.get('port');;
const server = app.listen(port, () => console.log(`Server listening on port ${port}...`));

module.exports = server;
