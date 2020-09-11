const mongoose = require('mongoose');
const config = require('config');

module.exports = function () {
	console.log('2:server db working');
	const db = config.get('db');
	mongoose
		.connect(db)
		.then(() => console.log(`Connected to ${db}...`))
		.catch((error) => {
			console.log(`There was a problem with mongodb:${error.message}`);
		});
};
