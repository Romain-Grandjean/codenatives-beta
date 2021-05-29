const { User } = require('../models/user');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('config');
const auth = require('../middleware/auth');
const admin = require('../middleware/admin');



// Get all users
router.get('/', async (req, res) => {

	try {
		const users = await User.find().sort('name');
		res.send(users);
	} catch (err) {
		res.status(500).json({
			message: err.message,
		});
	}
});

// Get one specific user
router.get('/:id', async (req, res) => {
	try {
		const user = await User.findById(req.params.id);
		res.send(user);
	} catch (error) {
		return res
			.status(404)
			.send('The customer with the given ID was not found.');
	}
});

// Get authenticated user
router.get('/account', async (req, res) => {
	const user = await User.findById(req.user._id).select('-password');
	res.send(user);
});

// Post user
router.post('/', async (req, res) => {
	let user = await User.findOne({ email: req.body.email });
	if (user) return res.status(400).send('Email already registered.');

	try {
		const user = new User({
			firstName: req.body.firstName,
			lastName: req.body.lastName,
			email: req.body.email,
			password: req.body.password,
			isAdmin: false,
			creationDate: Date.now(),
		});
		const salt = await bcrypt.genSalt(10);
		user.password = await bcrypt.hash(user.password, salt);
		await user.save();

		const token = user.generateAuthToken();

		res.header('x-auth-token', token)
			.header('access-control-expose-headers', 'x-auth-token')
			.send(user);
	} catch (error) {
		res.send(error);
	}
});

// Post user
router.post('/newadmin', async (req, res) => {
	try {
		const user = new User({
			firstName: req.body.firstName,
			lastName: req.body.lastName,
			email: req.body.email,
			password: req.body.password,
			isAdmin: req.body.isAdmin,
			creationDate: Date.now(),
		});
		const salt = await bcrypt.genSalt(10);
		user.password = await bcrypt.hash(user.password, salt);
		await user.save();

	} catch (error) {
		res.send(error);
	}
});

// Put user/
router.put('/:id', async (req, res) => {
	try {
		const user = await User.findByIdAndUpdate(
			req.params.id,
			{
				firstName: req.body.firstName,
				lastName: req.body.lastName,
				email: req.body.email,
				password: req.body.password,
				isAdmin: req.body.isAdmin,
				lastUpdate: Date.now(),
			},
			{ new: true }
		);
		res.status(201).send(user);
	} catch (error) {
		res.status(404).send(`User: ${error.value} can't be found`);
	}
});

// Delete user
router.delete('/:id', async (req, res) => {
	try {
		const user = await User.findByIdAndRemove(req.params.id);
		res.send('User deleted');
	} catch (error) {
		res.status(404).send(`User: ${error.value} can't be found`);
	}
});

module.exports = router;
