var MyApp = angular.module('dance');

MyApp.controller('update_video_controller', ['$scope', '$interval', function($scope, $interval){

    $scope.VidSource = null
    $scope.Auto = null
    $scope.UpdateVid = function() {
        $scope.VidSource = 'danceJs/bears.mp4';
        $scope.Auto = 'autoplay';
    }

    $interval( function(){ $scope.UpdateVid(); }, 5500);


}]);
