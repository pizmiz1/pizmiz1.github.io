var MyApp = angular.module('dance');

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

    $scope.ChosenName = 'IntroJam'
    $scope.ChosenDur = '5.2s'
    $scope.ChosenCount = '1'
    $scope.UpdateShit = function() {
        $scope.ChosenName = 'Jam';
        $scope.ChosenDur = '1.5s';
        $scope.ChosenCount = 'Infinite';
    }

    $interval( function(){ $scope.callAtInterval(); }, 500);
    $interval( function(){ $scope.UpdateShit(); }, 6000);

}]);