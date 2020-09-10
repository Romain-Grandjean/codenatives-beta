const mongoose = require('mongoose');
const config = require('config');

module.exports = function () {
	const db = config.get('db');
	mongoose
		.connect(db, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
          })
		.then(() => console.log(`Connected to ${db}...`))
		.catch((error) => {
			console.log(`There was a problem ${error.message}`);
		});
};
