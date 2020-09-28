const express = require('express');
const questions = require('../routes/questions');
const users = require('../routes/users');
const auth = require('../routes/auth');
const error = require('../middleware/error');

module.exports = function (app) {
	app.use(express.json());
	app.use('/api/questions', questions);
	app.use('/api/users', users);
	app.use('/api/auth', auth);
	app.use(error);
};
