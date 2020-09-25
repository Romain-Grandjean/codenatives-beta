const { now } = require('moment');
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
	firstName: {
		type: String,
		minlength: 2,
		maxlength: 50,
	},
	lastName: {
		type: String,
		minlength: 2,
		maxlength: 50,
	},
	email: {
		type: String,
		required: true,
		minlength: 5,
		maxlength: 255,
	},
	creationDate: {
		type: Date,
	},
	lastUpdate: {
		type: Date,
	},
	isAdmin: { type: Boolean },
	password: {
		type: String,
		required: true,
		minlength: 5,
		maxlength: 1024,
	},
});

const User = mongoose.model('users', userSchema);
exports.User = User;
