// var x = require('../x');

module.exports = function Truck(x) {
    var list = function(req, res) {
        res.send('Message from Truck.LIST');
    };

    var findById = function(req, res) {
        res.send('Message from Truck.findById');
    };
    var addTruck = function(req, res) {
        var Driver = require('../model/truck_model')
        var driver = new Driver(req.body);
        if (!driver.plateNumber) {
            res.status(400).send({
                result: "error",
                plateNumber: "Name is invalid"
            });
        } else {
            driver.save(function(err, data) {
                if (err) {
                    res.status(500).send({
                        result: "error",
                        message: "Some error  while add new truck."
                    });
                } else {
                    res.status(200).send(data);
                }
            });
        }

    };

    return {
        list: list,
        findById: findById
    }
}