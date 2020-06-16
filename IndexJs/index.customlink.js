var MyApp = angular.module('Index');

MyApp.controller('customlink', ['$scope', '$interval', function($scope, $interval){

    $scope.Pics = ['img/favicons/favicon1.ico?', 'img/favicons/favicon2.ico?', 'img/favicons/favicon3.ico?']
    $scope.var = 0
    $scope.chosenPic = $scope.Pics[$scope.var]
    $scope.callAtInterval = function() {
        if ($scope.var == $scope.Pics.length - 1){
            $scope.var = 0;
        }
        else {
            $scope.var++;
        }
        $scope.chosenPic = $scope.Pics[$scope.var];
    }

    $interval( function(){ $scope.callAtInterval(); }, 200);
}]);