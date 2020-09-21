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
		required: true,
		minlength: 15,
		maxlength: 400,
	},
	solutions: {
		type: Array,
	},
	solution1: {
		type: String,
		required: true,
		minlength: 15,
		maxlength: 400,
	},
	solution2: {
		type: String,
		required: true,
		minlength: 15,
		maxlength: 400,
	},
	solution3: {
		type: String,
		required: true,
		minlength: 15,
		maxlength: 400,
	},
	solution4: {
		type: String,
		required: true,
		minlength: 15,
		maxlength: 400,
	},
	answer:{ 
		type: Number,
		required: true,
	},
	explanations: {
		type: String,
		minlength: 15,
		maxlength: 400,
	}
});

const Question = mongoose.model('questions', questionSchema);
exports.Question = Question;
