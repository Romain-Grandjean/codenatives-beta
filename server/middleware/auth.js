const jwt = require('jsonwebtoken');
const config = require('config');

function auth(req, res, next) {
	const token = req.header('x-auth-token');
	if (!token) res.status(401).send('Access denied. No token provided.');
	try {
        const tokenDecoded = jwt.verify(token, config.get('jwtPrivateKey'));
        req.user = tokenDecoded;
        next();
	} catch (error) {
		res.status(400).send("Invalid token.");
	}
}

module.exports = auth;