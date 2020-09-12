const { Question } = require('../models/question');
const mongoose = require('mongoose');
const moment = require('moment');
const express = require('express');
const router = express.Router();

// Get all questions
router.get('/', async (req, res) => {
	try {
		const questions = await Question.find().sort('dateUpdate');
		res.send(questions);
	} catch (err) {
		res.status(500).json({
			message: err.message,
		});
	}
});

// Get one specific question
router.get('/:id', async (req, res) => {
	try {
		const question = await Question.findById(req.params.id);
		res.send(question);
	} catch (error) {
		return res
				.status(404)
				.send('The customer with the given ID was not found.');
	}
});

// Post question
router.post('/', async (req, res) => {
	try {
		const question = new Question({
			level: req.body.level,
			type: req.body.type,
			question: req.body.question,
			solutions: req.body.solutions,
			answer: req.body.answer,
			explanations: req.body.explanations,
		});
		await question.save();
		res.status(201).send(question);
	} catch (error) {
		res.send(error);
	}
});

// Put question
router.put('/:id', async (req, res) => {
	try {
		const question = await Question.findByIdAndUpdate(
			req.params.id,
			{
				level: req.body.level,
				type: req.body.type,
				question: req.body.question,
				solutions: req.body.solutions,
				answer: req.body.answer,
				explanations: req.body.explanations,
			},
			{ new: true }
		);
		res.status(201).send(question);
	} catch (error) {
		res.status(404).send(`Question: ${error.value} can't be found`);
	}
});

// Delete question
router.delete('/:id', async (req, res) => {
	try {
		const question = await Question.findByIdAndRemove(req.params.id);
		res.send('question deleted');
	} catch (error) {
		res.status(404).send(`Question: ${error.value} can't be found`);
	}
});

module.exports = router;
