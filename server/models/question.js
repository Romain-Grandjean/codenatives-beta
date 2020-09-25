// const Joi = require('joi');
const mongoose = require('mongoose');
// const moment = require('moment');

const questionSchema = new mongoose.Schema({
	level: {
		type: String,
	},
	type: {
		type: String,
	},
	question: {
		type: String,
	},
	solution1: {
		type: String,
	},
	solution2: {
		type: String,
	},
	solution3: {
		type: String,
	},
	solution4: {
		type: String,
	},
	answer: {
		type: String,
	},
	creationDate: {
		type: Date,
	},
	lastUpdate: {
		type: Date,
	},
});

const Question = mongoose.model('questions', questionSchema);
exports.Question = Question;
