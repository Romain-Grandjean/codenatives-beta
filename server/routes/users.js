const { User } = require('../models/question');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
	try {
		const questions = await User.find();
		res.send(questions);
	} catch (err) {
		res.status(500).json({
			message: err.message,
		});
	}
});

module.exports = router;
