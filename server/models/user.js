const mongoose = require('mongoose');

const User = mongoose.model(
	'users',
	new mongoose.Schema({

		id: { type: Number },
		level: { type: Number },
		question: { type: String },
		solutions: { type: [String] },
		explanations: { type: String },
	})
);

exports.User = User;
