var config = require('../config');
var x = require('../x')(config);

module.exports = {
    verifyToken: ((req, res, next) => {
        var token = req.body.token || req.query.token || read.header['Authorization'];
        if (token) {
            x.jwt.verify(token, config.SECRET_KEY, (err, decoded) => {
                if (err) {
                    return res.json({ success: false, message: 'Failed to authenticate token.' });
                } else {
                    req.decoded = decoded;
                    next();
                }
            });
        } else {
            res.send({ success: false, message: 'No token exists.' });
        }
    })
}