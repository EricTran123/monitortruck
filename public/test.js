var app = angular.module('myApp', ['myApp1','ngStorage']);
app.controller('GreetingController', ['$scope', function($scope) {
    $scope.greeting = 'Tesst';
    $scope.doubleNumber = function(num) {
        return num * 2;
    }

}]);
app.controller('SpicyController', ['$scope', function($scope) {
    $scope.text = 'Khoi tao';
    $scope.show1 = function() {
        $scope.text = "Show 1";
    };
    $scope.show2 = function() {
        $scope.text = "Show 2";
    }
}]);
// app.controller("ServiceController", ['$scope', '$http', function($scope, $http, $localStorage) {
//     $http({
//         method: "POST",
//         url: "/user/login",
//         data: { email: "quy3@gmail.com", password: "123456" }
//     }).then(function(response) {
//         console.log("Successsssssssssssssss")
//         $scope.text = response.data;

//         // console.log($localStorage.datastorage);
//     }, function(response) {
//         $scope.text = response.status;
//     });

// }]);
app.controller("ServiceController", function($scope, $http, $localStorage) {
    $http({
        method: "POST",
        url: "/user/login",
        data: { email: "quy3@gmail.com", password: "123456" }
    }).then(function(response) {
        console.log("Successsssssssssssssss")
        $scope.text = response.data;
        // console.log(response.data.token)
        $localStorage.currentUser = { email: response.data.email, token: response.data.token };
        console.log($localStorage.currentUser);
    }, function(response) {
        $scope.text = response.status;
    });
});
app.controller('Ctrl', function($scope, $localStorage, $http) {
    if ($localStorage.datastorage) {
        $scope.Applicantdata = $localStorage.datastorage;
        alert("Second Time Call");
    } else {

        $http.get("https://www.w3schools.com/angular/customers.php").then(function(response) {
            $scope.Applicantdata = response.data.records;
            $localStorage.datastorage = response.data.records;
            alert("First Time Call");
        });
    }
});
 app.controller('CalcController', function($scope, CalcService) {
    $scope.square = function() {
       $scope.result = CalcService.square($scope.number);
    }
 });
