const { User } = require('../models/user');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

// Login user
router.post('/', async (req, res) => {

	let user = await User.findOne({ email: req.body.email });
	if (!user) return res.status(400).send('Invalid password or email');


	const validPassword = await bcrypt.compare(
		req.body.password,
		user.password
	);
	if (!validPassword)
		return res.status(400).send('Invalid password or email');

	const token = user.generateAuthToken();
	
	res.send(token);
	console.log("this is user", user);
});

module.exports = router;
