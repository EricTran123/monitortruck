(function(){
    angular.module('x').controller('TruckCtrl', function($scope, $http){
        var vm = this;

        vm.message = 'A message from Angular';

        var init = function(){
            $http({
                method: 'GET',
                url: '/truck/'
            }).then(function(response){
                vm.message = response.data;
            }, function(error){

            });            
        };

        init();
    });    
})();