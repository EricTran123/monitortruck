module.exports = function Routing(x) {
    var routes = {};
    var router = x.express.Router();
    router.get('/', x.apis.truck.list);
    router.get('/:id', x.apis.truck.findById);

    routes.truck = router;

    router = x.express.Router();
    router.get('/', x.apis.user.list);
    router.get('/:id', x.apis.user.findById);
    router.post('/', x.apis.user.addUser);
    routes.user = router;

    router.get('/driver', x.apis.driver.findAllDriver);
    router.get('/:id', x.apis.driver.findDriverByID);
    router.post('/', x.apis.driver.addDriver);

    routes.driver = router;



    return {
        routes: routes
    }
};