const express = require('express');
const config = require('config');
const app = require("./app");

const port = process.env.PORT || config.get('port');;
const server = app.listen(port, () => console.log(`Server listening on port ${port}...`));
