const morgan = require('morgan');
const express = require('express');
const config = require('config');
const app = express();
app.use(morgan('dev'));
const mongoose = require('mongoose');

// Server Main routes
require('./server/cors')(app);
require('./server/routes')(app);


// Json parsing

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.raw());

// MongoDB

const db = config.get('db');
mongoose
	.connect(db, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true,
	})
	.then(() => console.log(`Connected to ${db}...`))
	.catch((error) => {
		console.log(`There was a problem with mongodb:${error.message}`);
	});
mongoose.set('useFindAndModify', false);

// Server

const port = process.env.PORT || config.get('port');
const server = app.listen(port, () =>
	console.log(`Server listening on port ${port}...`)
);

module.exports = server;
