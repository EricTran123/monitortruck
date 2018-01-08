(function() {
    var app = angular.module('myApp', ['ui.router']);

    app.run(function($rootScope, $location, $state, LoginService) {
        console.clear();
        console.log('running');
        if (!LoginService.isAuthenticated()) {
            $state.transitionTo('login');
        }
    });

    app.config(['$stateProvider', '$urlRouterProvider',
        function($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('login', {
                    url: '/login',
                    templateUrl: './login/login.html',
                    controller: 'LoginController'
                })
                .state('home', {
                    url: '/home',
                    templateUrl: './home/home.html',
                    controller: 'HomeController'
                })
                .state('forgotPassword', {
                    url: '/forgotPassword',
                    templateUrl: './login/forgotPassword.html',
                    controller: 'LoginController'
                });

            $urlRouterProvider.otherwise('/login');
        }
    ]);

})();