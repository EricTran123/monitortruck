module.exports = function Routing(x) {
    var routes = {};
    //Set router for user controller
    var router = x.express.Router();
    // Register new user
    router.post('/register', x.apis.user.register);
    //Login user
    router.post('/login', x.apis.user.login);
    routes.user = router;

    //Set router for driver controller
    router = x.express.Router();
    //Add driver
    router.post('/', x.apis.driver.addDriver);
    //Get driver by ID
    router.get('/:id', x.apis.driver.findDriverByID);
    //Get all drivers
    router.get('/', x.apis.driver.findAllDriver);
    // Delete driver 
    router.delete('/:id', x.apis.driver.deleteDriver);
    // Update driver
    router.put('/:id', x.apis.driver.updateDriver);
    routes.driver = router;

    //Set routers for customer controller
    router = x.express.Router();
    //Add customer
    router.post('/', x.apis.customer.addCustomer);
    //Update customer
    router.put('/:id', x.apis.customer.updateCustomer);
    //Delete customer
    router.delete('/:id', x.apis.customer.deleteCustomer);
    //Get all customers
    router.get('/', x.apis.customer.getAllCustomer);
    //Get customer by id
    router.get('/:id', x.apis.customer.getCustomerByID);
    routes.customer = router;
    return {
        routes: routes
    }
};