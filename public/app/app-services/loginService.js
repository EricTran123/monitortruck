var app = angular.module('myApp');
app.factory('LoginService', function($http) {
    var admin = 'admin';
    var pass = 'password';
    // var isAuthenticated = false;
    // var ser
    // return {
    //     login: function(username, password) {
    //         isAuthenticated = username === admin && password === pass;
    //         return isAuthenticated;
    //     },
    //     isAuthenticated: function() {
    //         return isAuthenticated;
    //     }
    // };
    var services = {};
    var isAuthenticated = false;
    services.isAuthenticated = function() {
        return isAuthenticated;
    }
    services.login = function(username, password) {
        // isAuthenticated = username === admin && password === pass;
        console.log("User: " + username)
        console.log("Password: " + password)
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
        })
        return isAuthenticated;
    }
    return services;
});