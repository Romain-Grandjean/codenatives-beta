const { User } = require('../models/user');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

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

// Post user
router.post('/', async (req, res) => {
	try {
		const user = new User({
			firstName: req.body.firstName,
			lastName: req.body.lastName,
			email: req.body.email,
			password: req.body.password,
			isAdmin: req.body.isAdmin,
		});
		await user.save();
		res.status(201).send(user);
	} catch (error) {
		res.send(error);
	}
});

// Post Admin
router.post('/admin', async (req, res) => {
	try {
		const user = new User({
			firstName: req.body.firstName,
			lastName: req.body.lastName,
			email: req.body.email,
			password: req.body.password,
			isAdmin: true,
		});
		await user.save();
		res.status(201).send(user);
	} catch (error) {
		res.send(error);
	}
});

// Put user/admin
router.put('/:id', async (req, res) => {
	try {
		const user = await User.findByIdAndUpdate(
			req.params.id,
			{
				name: req.body.name,
				email: req.body.email,
				password: req.body.password,
			},
			{ new: true }
		);
		res.status(201).send(user);
	} catch (error) {
		res.status(404).send(`User: ${error.value} can't be found`);
	}
});

// Delete user/admin
router.delete('/:id', async (req, res) => {
	try {
		const user = await User.findByIdAndRemove(req.params.id);
		res.send('User deleted');
	} catch (error) {
		res.status(404).send(`User: ${error.value} can't be found`);
	}
});

module.exports = router;
