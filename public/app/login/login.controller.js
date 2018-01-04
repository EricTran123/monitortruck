(function() {
    angular.module("LoginApp").controller("LoginController", LoginController);

    function LoginController($location, AuthenticationService) {
        var vm = this;
        vm.login = login;
        initController();

        function initController() {
            AuthenticationService.Logout();
        };

        function login() {
            vm.loading = true;
            AuthenticationService.Login(vm.username, vm.password, function(result) {
                if (result == true) {
                    // $location.path("/");
                    console.log("Login success")
                    vm.success = "Login success";
                } else {
                    vm.err = "Username or password is incorrect";
                    vm.loading = false;
                }
            });
        };
    }
})();