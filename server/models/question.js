// const Joi = require('joi');
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
		minlength: 15,
		maxlength: 400,
	},
	solution1: {
		type: String,
		minlength: 15,
		maxlength: 400,
	},
	solution2: {
		type: String,
		minlength: 15,
		maxlength: 400,
	},
	solution3: {
		type: String,
		minlength: 15,
		maxlength: 400,
	},
	solution4: {
		type: String,
		minlength: 15,
		maxlength: 400,
	},
	answer:{ 
		type: Number,
	}
});

const Question = mongoose.model('questions', questionSchema);
exports.Question = Question;
