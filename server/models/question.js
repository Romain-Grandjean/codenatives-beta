const mongoose = require('mongoose');
// const moment = require('moment');

const questionSchema = new mongoose.Schema({
	level: {
		type: String,
		required: true,
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
		type: Number,
	},
	explanations: {
		type: String,
		minlength: 15,
		maxlength: 200,
	},
	dateCreation: {
		type: Date,
		required: true,
		default: Date.now,
	},
	dateUpdate: {
		type: Date.now,
	},
});

const Question = mongoose.model('questions', questionSchema);
exports.Question = Question;
