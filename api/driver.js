module.exports = function Driver(x) {
    var addDriver = function(req, res) {
        var Driver = require('../model/driver_model')
        var driver = new Driver(req.body);
        if (!driver.name) {
            res.status(400).send({
                result: "error",
                message: "Name is invalid"
            });
        } else if (!driver.email) {
            res.status(400).send({
                result: "error",
                message: "Email is invalid"
            });
        } else {
            driver.save(function(err, data) {
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
    var findDriverByID = function(req, res) {
        var Driver = require('../model/driver_model')
        Driver.findById(req.params.driverID, function(err, data) {
            if (err) {
                res.status(500).send({
                    result: "error",
                    messsage: "Could not retrieve note with id " + req.params.noteId
                })
            } else {
                res.send(data);
            }
        });
    }

    var findDriverByEmail = function(req, res) {

    }

    var deleteDriver = function(req, res) {}
    var findAllDriver = function(req, res) {
        var Driver = require('../model/driver_model')
        Driver.find(function(err, drivers) {
            if (err) {
                res.status(500).send({
                    result: "error",
                    message: "Some errors occur while retrieving drivers"
                })
            } else {
                res.send(drivers);
            }
        })
    }

    return {
        addDriver: addDriver,
        findDriverByID: findDriverByID,
        findDriverByEmail: findDriverByEmail,
        findAllDriver: findAllDriver


    }
}