module.exports = function Driver(x) {
    var addDriver = function(req, res) {
        var Driver = require('../model/driver_model')
        var driver = new Driver(req.body);
        if (!driver.name) {
            res.status(400).send({
                result: "error",
                message: "Name is required."
            });
        } else if (!driver.email) {
            res.status(400).send({
                result: "error",
                message: "Email is required."
            });
        } else if (!driver.plateNumber) {
            res.status(400).send({
                result: "error",
                message: "PlateNumber is required."
            });
        } else {
            driver.save(function(err, driver) {
                if (err) {
                    res.status(500).send({
                        result: "error",
                        message: "Some error while adding new driver."
                    });
                } else {
                    res.status(200).send({ success: true, driver: driver });
                }
            });
        }
    };
    var findDriverByID = function(req, res) {
        var Driver = require('../model/driver_model')
        Driver.findById(req.params.id, function(err, driver) {
            if (err) {
                res.status(500).send({
                    success: false,
                    messsage: "Could not retrieve driver with id " + req.params.id
                })
            } else {
                res.status(200).send({ success: true, driver: driver });
            }
        });
    };

    var deleteDriver = function(req, res) {
        var Driver = require('../model/driver_model');
        Driver.findById(req.params.id, function(err, driver) {
            if (err) {
                res.status(500).send({
                    success: false,
                    message: "Could not delete driver with id " + req.params.id
                });
            }
            if (driver == null) {
                res.status(404).send({
                    success: false,
                    message: "Driver can not be found."
                })
            } else {
                driver.remove(function(err) {
                    if (err) {
                        res.status(400).send(err);
                        return;
                    } else {
                        res.status(200).send({
                            success: true,
                            message: "Driver is deleted successfully."
                        })
                    }
                })
            }
        })
    };
    var findAllDriver = function(req, res) {
        var Driver = require('../model/driver_model');
        Driver.find(function(err, drivers) {
            if (err) {
                res.status(500).send({
                    success: false,
                    message: "Some errors occur while retrieving drivers"
                })
            } else {
                res.status(200).send({ success: true, drivers: drivers });
            }
        })
    };
    var updateDriver = function(req, res) {
        var Driver = require('../model/driver_model');
        Driver.findById(req.params.id, function(err, driver) {
            if (err) {
                res.status(500).send({
                    success: false,
                    message: "Could not find a driver with id " + req.params.id
                })
            }
            if (driver == null) {
                res.status(404).send({
                    success: false,
                    message: "Driver can be not found."
                })
            } else {
                driver.set(req.body);
                driver.save(function(err, data) {
                    if (err) {
                        res.status(500).send({
                            success: false,
                            message: "Could not update driver with id: " + req.params.id
                        });
                    } else {
                        res.status(200).send({ success: true, driver: data });
                    }
                })
            }
        })
    }

    return {
        addDriver: addDriver,
        findDriverByID: findDriverByID,
        findAllDriver: findAllDriver,
        deleteDriver: deleteDriver,
        updateDriver: updateDriver
    }
}