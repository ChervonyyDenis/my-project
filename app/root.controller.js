angular.module('AppModule')
    .controller('rootController', ['$scope', 'SharedService', function ($scope, shared) {
        $scope.$watch($scope.configuration = shared.getFromLocalStorage());
    }]);
