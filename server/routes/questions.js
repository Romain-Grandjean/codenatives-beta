const { Question } = require('../models/question');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

// Get all questions
router.get('/', async (req, res) => {
	try {
		const questions = await Question.find();
		res.send(questions);
	} catch (err) {
		res.status(500).json({
			message: err.message,
		});
	}
});
// Get one specific question
router.get('/:id'),
	async (req, res) => {
		try {
			const question = Question.findById(req.params.id);
			res.send(question);
		} catch (error) {
			return res
				.status(404)
				.send('The customer with the given ID was not found.');
		}
	};

module.exports = router;
