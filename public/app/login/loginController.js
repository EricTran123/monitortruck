var app = angular.module('myApp');
app.controller('LoginController', function($scope, $rootScope, $stateParams, $state, LoginService) {
    $rootScope.title = "AngularJS Login Sample";

    $scope.formSubmit = function() {
        LoginService.login($scope.username, $scope.password).then(function(response) {
            console.log("Token: " + response.data.token);
            if (response.data.token) {
                LoginService.isAuthenticated = true;
            } else {
                LoginService.isAuthenticated = false;
            }
        });
        if (LoginService.isAuthenticated) {
            $rootScope.userName = $scope.username;
            $state.transitionTo('home');
        } else {
            $scope.error = "User name or password is incorrect.";
        }
    };
    $scope.forgotPassword = function() {

        $state.go('forgotPassword')
    }
});