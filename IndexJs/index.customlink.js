var MyApp = angular.module('Index');

MyApp.controller('customlink', ['$scope', '$interval', function($scope, $interval){

    $scope.Pics = ['/img/favicons/favicon1.jpg?', '/img/favicons/favicon2.jpg?']
    $scope.var = 0
    $scope.chosenPic = $scope.Pics[$scope.var]
    $scope.callAtInterval = function() {
        if ($scope.var == 0){
            $scope.var = 1;
        }
        else {
            $scope.var = 0;
        }
        $scope.chosenPic = $scope.Pics[$scope.var];
    }

    $interval( function(){ $scope.callAtInterval(); }, 500);
}]);