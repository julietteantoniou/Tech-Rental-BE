const jwt = require('jsonwebtoken');

module.exports = (user) => {

    const payload = {
        subject: user.id,
        username: user.username
    }

    const secret = process.env.JWT_SECRET
    const options = {
        expiresIn: '100h',
    };
return jwt.sign(payload, secret, options)
}