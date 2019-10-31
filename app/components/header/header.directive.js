angular.module('HeaderModule')
    .directive('header', function ($location) {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                saveDefinition: '&'
            },
            templateUrl: 'app/components/header/header.html',
            controller: function ($scope) {
                $scope.saveName = '';

                $scope.goToSavedDefinitions = function () {
                    $location.path('/');
                };
            },
            link: function ($scope, $element, attrs) {
            }
        };
    });