const { User } = require('../models/user');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

// Get all users
router.get('/', async (req, res) => {
	try {
		const users = await User.find();
		res.send(users);
	} catch (err) {
		res.status(500).json({
			message: err.message,
		});
	}
});

// Get one specific user
router.get('/:id'),
	async (req, res) => {
		try {
			const user = User.findById(req.params.id);
			res.send(user);
		} catch (error) {
			return res
				.status(404)
				.send('The customer with the given ID was not found.');
		}
	};

module.exports = router;
