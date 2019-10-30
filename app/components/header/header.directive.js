angular.module('HeaderModule')
    .directive('header', function ($location) {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                saveTemplate: '&'
            },
            templateUrl: 'app/components/header/header.html',
            controller: function ($scope) {
                $scope.saveName = '';

                $scope.goToSavedTemplates = function () {
                    $location.path('/');
                };
            },
            link: function ($scope, $element, attrs) {
            }
        };
    });