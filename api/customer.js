module.exports = function Customer(x) {
    var addCustomer = function(req, res) {
        var Customer = require('../model/customer_model');
        var customer = new Customer(req.body);
        if (!customer.name) {
            res.status(400).send({
                result: "error",
                message: "Name is required."
            });
        } else if (!customer.address) {
            res.status(400).send({
                result: "error",
                message: "Address is required."
            });
        } else if (!customer.phoneNumber) {
            res.status(400).send({
                result: "error",
                message: "PhoneNumber is required."
            });
        } else {
            customer.save(function(err, data) {
                if (err) {
                    res.status(500).send({
                        result: "error",
                        message: "Some errors while adding new driver."
                    });
                } else {
                    res.status(200).send(data);
                }
            });
        }
    };
    var getAllCustomer = function(req, res) {
        var Customer = require('../model/customer_model');
        Customer.find(function(err, data) {
            if (err) {
                res.status(500).send({
                    result: "error",
                    message: "Some errors occur while retrieving customers."
                })
            } else {
                res.status(200).send(data);
            }
        });
    };
    var getCustomerByID = function(req, res) {
        var Customer = require('../model/customer_model');
        Customer.findById(req.params.id, function(err, customer) {
            if (err) {
                res.status(500).send({
                    result: "error",
                    messsage: "Could not retrieve customer with id " + req.params.id
                })
            } else {
                res.status(200).send(customer);
            }
        });
    };
    var updateCustomer = function(req, res) {
        var Customer = require('../model/customer_model');
        Customer.findById(req.params.id, function(err, customer) {
            if (err) {
                res.status(500).send({
                    result: "error",
                    message: "Could not find a customer with id " + req.params.id
                })
            }
            if (customer == null) {
                res.status(404).send({
                    result: "error",
                    message: "Customer can be not found."
                })
            } else {
                customer.set(req.body);
                customer.save(function(err, data) {
                    if (err) {
                        res.status(500).send({
                            result: "",
                            message: "Could not update customer with id: " + req.params.id
                        });
                    } else {
                        res.status(200).send(data);
                    }
                })
            }
        })
    };
    var deleteCustomer = function(req, res) {
        var Customer = require('../model/customer_model');
        Customer.findById(req.params.id, function(err, customer) {
            if (err) {
                res.status(500).send({
                    result: "error",
                    message: "Could not delete customer with id " + req.params.id
                });
            }
            if (customer == null) {
                res.status(404).send({
                    result: "error",
                    message: "Customer can not be found."
                })
            } else {
                customer.remove(function(err) {
                    if (err) {
                        res.status(400).send(err);
                        return;
                    } else {
                        res.status(200).send({
                            result: "Succcess",
                            message: "Customer is deleted successfully."
                        })
                    }
                })

            }
        })
    };
    return {
        addCustomer: addCustomer,
        updateCustomer: updateCustomer,
        deleteCustomer: deleteCustomer,
        getAllCustomer: getAllCustomer,
        getCustomerByID: getCustomerByID
    }
}