module.exports = function Truck(x){
    var list = function(req, res){
        res.send('Message from Truck.LIST');
    };

    var findById = function(req, res){
        res.send('Message from Truck.findById');
    };


    return {
        list : list,
        findById: findById
    }
}