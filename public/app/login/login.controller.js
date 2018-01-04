(function() {

    angular
        .module('AuthenApp',['ngStorageApp'])
        .controller('LoginController', LoginController);

    function LoginController($location, AuthenticationService) {
        var vm = this;

        vm.login = login;

        initController();

        function initController() {
            // reset login status
            AuthenticationService.Logout();
        };

        function login() {
            vm.loading = true;
            AuthenticationService.Login(vm.email, vm.password, function(result) {
                if (result === true) {
                    $location.path('../home/home.html');
                } else {
                    vm.error = 'Email or password is incorrect';
                    vm.loading = false;
                }
            });
        };
    }

})();