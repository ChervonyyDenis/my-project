angular.module('StatisticModule')
    .controller('StatisticController', function ($scope, $routeParams) {
        $scope.welcome = 'This is the statistic page!';
        $scope.idParam = $routeParams.id;
    });