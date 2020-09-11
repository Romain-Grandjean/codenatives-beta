const express = require('express');
const unit = require('../routes/unit');

module.exports = function (app) {
	app.use(express.json());
	app.use('/', unit);
};