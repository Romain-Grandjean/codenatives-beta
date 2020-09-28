const { User } = require('../models/user');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const Joi = require('joi');
const bcrypt = require('bcrypt');



// Login user
router.post('/', async (req, res) => {
    // const { error } = validate(req.body);
    // if (error) return res.status(400).send(error.details[0].message);

    let user = await User.findOne({ email: req.body.email});
    if (!user) return res.status(400).send('Invalid password or email');

    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) return res.status(400).send('Invalid password or email');

    res.send(true)
});

// function validate(req) {
// 	const schema = {
// 		email: Joi.string().min(5).max(255).required().email(),
// 		password: Joi.string().min(5).max(255).required(),
// 	};
// 	return Joi.validate(req, schema);
// }

module.exports = router;
