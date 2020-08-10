var DanceApp = angular.module('dance');

DanceApp.controller('update_nav_controller', function($scope){
    $scope.text = 'nav-item active';
    $scope.text2 = 'nav-item';
    $scope.PlayMusic = function(){
        var audio = new Audio('danceJs/5050.mp3');
        audio.play();
    }

    $scope.PlayMusic()
});