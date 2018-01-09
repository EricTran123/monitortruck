var app = angular.module('myApp');
app.factory('LoginService', function($http) {
    // var services = {};
    // var isAuthenticated = false;
    // services.isAuthenticated = function() {
    //     return isAuthenticated;
    // }
    // services.getMessage = function() {
    //     return message;
    // }
    // services.login = function(username, password) {
    //     // isAuthenticated = username === admin && password === pass;
    //     // return $http({
    //     //     method: "POST",
    //     //     url: "/user/login",
    //     //     data: { email: username, password: password }
    //     // });
    //     return $http.post("user/login", {
    //         email: username, password: password
    //     });
    //     //return isAuthenticated;
    // }
    // return services;
    var isAuthenticated = false;

    return {
        isAuthenticated: function() {
            return isAuthenticated;
        },
        login: function(username, password) {
            return $http.post("user/login", {
                email: username,
                password: password
            });
        }
    }
});