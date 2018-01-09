var app = angular.module('myApp');
app.factory('LoginService', function($http) {
    var services = {};
    var isAuthenticated = false;
    services.isAuthenticated = function() {
        return isAuthenticated;
    }
    services.getMessage = function() {
        return message;
    }
    services.login = function(username, password) {
        // isAuthenticated = username === admin && password === pass;
        $http({
            method: "POST",
            url: "/user/login",
            data: { email: username, password: password }
        }).then(function(response) {
            console.log("Token: " + response.data.token);
            if (response.data.token) {
                isAuthenticated = true;
            } else {
                isAuthenticated = false;
            }
        }, function(err) {})
        return isAuthenticated;
    }
    return services;
});