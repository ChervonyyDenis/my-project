angular.module('AboutModule')
    .controller('AboutController', ['$scope', 'SharedService', function ($scope, shared) {
        $scope.selectedOptions = shared.getOptions();
    }]);