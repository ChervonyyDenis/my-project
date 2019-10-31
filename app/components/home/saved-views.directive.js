angular.module('HomeModule')
    .directive('savedViews', function (localStorage, $location) {
        return {
            restrict: 'E',
            templateUrl: 'app/components/home/saved-views.html',
            scope: {},
            controller: function ($scope) {
                $scope.savedDefinitions = [];
                localStorage.getSavedDefinitions()
                    .then(function (savedDefinition) {
                        $scope.savedDefinitions = savedDefinition;
                    }, function (reason) {
                        console.log(reason);
                    });
                $scope.redirectToDefinition = function (definitionId) {
                    $location.path('/designer/' + definitionId);
                };
            }
        };
    });