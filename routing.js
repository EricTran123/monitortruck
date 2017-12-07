module.exports = function Routing(x){
    var routes = {};
    var router  = x.express.Router();
    router.get('/', x.apis.truck.list);
    router.get('/:id', x.apis.truck.findById);

    routes.truck = router;

    router  = x.express.Router();
    router.get('/', x.apis.user.list);
    router.get('/:id', x.apis.user.findById);

    routes.user = router;

    return {
        routes : routes
    }
};
