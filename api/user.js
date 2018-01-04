module.exports = function User(x) {
    var register = function(req, res) {
        var User = require('../model/user_model');
        process.nextTick(() => {
            User.findOne({ 'email': req.body.email }, function(err, user) {
                if (err) {
                    res.send({ success: false, message: "Authentication failed." });
                    return;
                } else if (user) {
                    res.send({ success: false, message: "Username already exists" });
                    return;
                } else if (!req.body.email || !req.body.password) {
                    res.send({ success: false, message: "Please pass name and password." });
                    return;
                } else {
                    var newUser = new User();
                    newUser.email = req.body.email;
                    newUser.password = newUser.generateHash(req.body.password);
                    if (req.body.admin) {
                        newUser.admin = req.body.admin;
                    }
                    newUser.save(function(err) {
                        if (err) {
                            return res.send({ success: false, message: 'Username already exists.' });
                        }
                        var token = x.jwt.sign(newUser.toJSON(), x.config.SECRET_KEY, {
                            expiresIn: 60 * 60 * 24
                        });
                        res.send({ success: true, message: 'Successful created new user.', email: newUser.email, token: token });
                    })
                }
            });
        })
    };
    var login = function(req, res) {
        var User = require('../model/user_model');
        var reqUser = req.body;
        User.findOne({ 'email': reqUser.email }, function(err, user) {
            if (err) {
                return;
            }
            if (!user) {
                res.send({ success: false, message: 'User does not exists' });
                return;
            }
            if (!user.validPassword(reqUser.password)) {
                res.send({ success: false, message: 'Incorrect password.' });
                return;
            }
            var token = x.jwt.sign(user.toJSON(), x.config.SECRET_KEY, {
                expiresIn: 60 * 60 * 24
            });
            res.send({ success: true, message: 'You logged in', email: user.email, token: token });
        });

    };
    var auth = require('../middleware/auth');
    var getMemberInfo = function(req, res) {};

    return {
        register: register,
        login: login,
        getMemberInfo: getMemberInfo
    }
}