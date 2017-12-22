module.exports = function User(x) {
    var list = function(req, res) {
        // res.send('Message from User.LIST');
        var User = require('../model/user_model');
        User.find(function(err, data) {
            if (err) {
                res.status(500).send({
                    result: "error",
                    message: "Some errors occur while retrieving drivers"
                })
            } else {
                res.send(data);
            }
        });
    };

    var findById = function(req, res) {
        res.send('Message from User.findById');
    };
    var addUser = function(req, res) {
        var User = require('../model/user_model');
        var user = new User(req.body);
        if (!user.name) {
            res.status(400).send({
                result: "error",
                message: "Name is invalid"
            });
        } else if (!user.email) {
            res.status(400).send({
                result: "error",
                message: "Email is invalid"
            });
        } else if (user.admin == null) {
            res.status(400).send({
                result: "error",
                message: "Admin is null"
            });
        } else {
            user.save(function(err, data) {
                if (err) {
                    res.status(500).send({
                        result: "error",
                        message: "Some error  while creating new user."
                    });
                } else {
                    res.status(200).send(data);
                }
            });
        }
    };

    return {
        list: list,
        findById: findById,
        addUser: addUser
    }
}