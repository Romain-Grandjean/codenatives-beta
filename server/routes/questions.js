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

// Get questions by level
// Get questions by type

// Get one specific question
router.get('/:id',
	async (req, res) => {
		try {
			const question = Question.findById(req.params.id);
			res.send(question);
		} catch (error) {
			return res
				.status(404)
				.send('The customer with the given ID was not found.');
		}
	});

// Post one question

router.post('/',
	async (req, res) => {
	try {
		const question = new Question({
			level: req.body.level,
			type: req.body.type,
			question: req.body.question,
			solution: req.body.solution,
			explanations: req.body.explanations
		});
		await question.save();
		res.status(201).send(question);
	} catch (error) {
		res.send(error);
	}
	});

// Put one question

router.put('/:id', async (req, res) => {
	try {
	const question = await Question.findByIdAndUpdate(
		req.params.id,
		{
			level: req.body.level,
			type: req.body.type,
			question: req.body.question,
			solution: req.body.solution,
			explanations: req.body.explanations,
		},
		{ new: true }
	);
	} catch (error) {
		res.status(404).send("the question ID wasn't found");

	}
	

});

// Delete one question

router.delete('/:id', async (req, res) => {
	const question = await Question.findByIdAndRemove(req.params.id);

	if (!question) res.status(404).send("the question ID wasn't found");
	res.send.question;
});

module.exports = router;
