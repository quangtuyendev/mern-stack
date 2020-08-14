const config = require('../config');
const jwt = require('jsonwebtoken');

function isAuth(req, res, next) {
    const token = req.headers.authorization;
    if (token) {
        const onlyToken = token.slice(7);
        jwt.verify(onlyToken, config.JWT_SECRET, (err, decode) => {
            if (err) {
                return res.status(401).send({ message: 'Invalid Token' });
            }
            req.user = decode;
            next();
        });
    } else {
        res.status(401).send({ message: 'Missing token' })
    }
}
module.exports = isAuth;