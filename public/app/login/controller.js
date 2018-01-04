var app = angular.module('AuthenApp',['ngStorage']);
app.controller('LoginController', function(AuthenticationService){
    var vm = this;
    vm.login = login;
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

})