const mongoose = require('mongoose');

const Unit = mongoose.model(
	'Unit',
	new mongoose.Schema({
		name: {
			type: String,
			required: true,
			minlength: 5,
			maxlength: 50,
		}
	})
);


module.exports = Unit;

