(function() {
    var app = angular.module('myApp', ['ui.router', 'directives']);

    app.run(function($rootScope, $location, $state, LoginService) {
        console.clear();
        console.log('running');
        if (!LoginService.isAuthenticated()) {
            $state.transitionTo('login');
        }
    });

    app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
        function($stateProvider, $urlRouterProvider, $locationProvider) {
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
                    templateUrl: './login/forgotPassword.html'
                })
                .state('changePassword', {
                    url: '/changePassword',
                    templateUrl: './Users/changePassword.html',
                    controller: 'LoginController'
                });

            $urlRouterProvider.otherwise('/login');
            $locationProvider.html5Mode({
                enabled: true,
                requireBase: false
            }).hashPrefix("");
        }
    ]);

})();