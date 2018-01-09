var app = angular.module('myApp');
app.controller('LoginController', function($scope, $rootScope, $stateParams, $state, LoginService) {
    $rootScope.title = "AngularJS Login Sample";

    $scope.formSubmit = function() {
        if (LoginService.login($scope.username, $scope.password)) {
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