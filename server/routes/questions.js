const { Question } = require('../models/question');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
	console.log('3: route question');
	try {
		const questions = await Question.find();
		res.send(questions);
	}catch (err) {
		res.status(500).json({
		  message: err.message,
		});
	  }
});

module.exports = router;
