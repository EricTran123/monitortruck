var app = angular.module('AuthenApp', ['ngStorage']);
app.factory('AuthenticationService', function($http, $localStorage) {
    var services = {};
    services.Login = Login;
    services.Logout = Logout;
    return services;

    function Login(email, password, callback) {
        console.log("Email: " + email)
        console.log("Password: " + password)
        $http({
            method: "POST",
            url: "/user/login",
            data: { email: email, password: password }
        }).then(function(response) {
            if (response.data.token) {
                $localStorage.currentUser = { email: email, token: response.data.token };
                console.log($localStorage.currentUser)
                $http.defaults.headers.common.Authorization = response.data.token;
                callback(true);
            } else {
                callback(false);
            }
        }, function(err) {

        })
    };

    function Logout() {
        delete $localStorage.currentUser;
        $http.defaults.headers.common.Authorization = '';
    };
});
// https://krazytech.com/programs/simple-login-example-in-angularjs