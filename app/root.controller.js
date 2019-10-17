angular.module('AppModule')
    .controller('rootController', ['$scope', 'SharedService', function ($scope, shared) {
        $scope.$watch(function () {
            $scope.configuration = shared.getElementConfiguration();
        });
    }]);
