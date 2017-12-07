module.exports = function User(x){
    var list = function(req, res){
        res.send('Message from User.LIST');
    };

    var findById = function(req, res){
        res.send('Message from User.findById');
    };


    return {
        list : list,
        findById: findById
    }
}