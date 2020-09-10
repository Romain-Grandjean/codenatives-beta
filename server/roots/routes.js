const express = require('express');
const genres = require('../routes/units');

module.exports = function (app) {
	app.use(express.json());
	app.use('/api/units', genres);

};