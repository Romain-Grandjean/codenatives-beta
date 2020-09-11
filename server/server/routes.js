const express = require('express');
const questions = require('../routes/questions');
const users = require('../routes/users');
const error = require('../middleware/error');

module.exports = function (app) {
	app.use(express.json());
	app.use('/api/questions', questions);
	app.use('/api/users', users);
	app.use(error);
};
