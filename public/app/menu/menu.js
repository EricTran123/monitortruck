angular.module('directives', []).directive('menu', function() {
    return {
        restrict: 'A',
        templateUrl: './menu/menu.html',
        controller: function($scope) {}
    };
});