const mongoose = require('mongoose');
const moment = require('moment');

const questionSchema = new mongoose.Schema({
	level: {
		type: Number,
		required: true,
		min: 1,
		max: 8,
	},
	type: {
		type: String,
		required: true,
	},
	question: {
		type: String,
		required: true,
		minlength: 15,
		maxlength: 200,
	},
	solution: {
		type: Array,
	},
	explanations: {
		type: String,
		minlength: 15,
		maxlength: 200,
	},
	dateCreation: {
		type: Date,
		required: true,
		default: moment.utc(),
	},
	dateUpdate: {
		type: Date,
	},
});

const Question = mongoose.model('questions', questionSchema);
exports.Question = Question;
