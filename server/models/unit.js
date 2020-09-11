const mongoose = require('mongoose');

const Unit = mongoose.model(
	'units',
	new mongoose.Schema()
);

module.exports = Unit;
