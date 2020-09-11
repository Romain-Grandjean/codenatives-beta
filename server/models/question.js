const mongoose = require('mongoose');

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
	solutions: {
		type: Array,
	},
	explanations: {
		type: String,
		minlength: 15,
		maxlength: 200,
	},
});

const Question = mongoose.model('questions', questionSchema);
exports.Question = Question;
