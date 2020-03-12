const jwt = require('jsonwebtoken');
const secrets = require('./secrets.js');

module.exports = (user) => {

    const payload = {
        subject: user.id,
        username: user.username
    }

    const secret = 'top secret secret';
    const options = {
        expiresIn: '100h',
    };
return jwt.sign(payload, secrets.jwtSecret, options)
}