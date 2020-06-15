var MyApp = angular.module('index',[]);

MyApp.controller('ShufflerController', ['$scope', '$window', function($scope, $window) {

    $scope.lastchosen = null
    $scope.sites = ["http://pointl.us", "http://www.partridgegetslucky.com", "http://www.staggeringbeauty.com", "https://cat-bounce.com"]

    $scope.GenerateSite = function() {
        var len = $scope.sites.length;
        if (len == 0){
            $scope.sites = ["http://pointl.us", "http://www.partridgegetslucky.com", "http://www.staggeringbeauty.com", "https://cat-bounce.com"]; 
        }
        var chosen = Math.floor(Math.random() * len);
        $scope.lastchosen = chosen;
        var chosenSite = $scope.sites[chosen];
        $scope.sites.splice(chosen, 1);
        $window.open(chosenSite, '_blank');
    }

}]);