/** jwt */
var jwt = require('jsonwebtoken');

/** dotenv */
require('dotenv').config()

exports.checkJWT = (req, res, next) => {
    if (req.headers['authorization']) {
        const auth = req.headers['authorization'].split(' ');
        if (auth[0] !== 'Bearer') {
            return res.status(401).send();
        } else {
            jwt.verify(auth[1], process.env.JWT_SECRET, (err, decoded) => {
                if(err) {
                    return res.status(403).send('Not Authorized')
                } else {
                    return next()
                }
              })
        }
    } else {
        return res.status(401).send('Missing authorization header : JWT Token to log in');
    }
}; 