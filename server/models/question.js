const mongoose = require('mongoose');

const Question = mongoose.model(
	'questions',
	new mongoose.Schema({

		id: { type: Number },
		level: { type: Number },
		question: { type: String },
		solutions: { type: [String] },
		explanations: { type: String },
	})
);

exports.Question = Question;
