angular.module('InspectorModule')
    .directive('inspector', function () {
        return {
            restrict: 'E',
            templateUrl: 'app/components/inspector/inspector.html',
            scope: {
                config: '='
            },
            controller: function ($scope) {
                $scope.welcome = 'Welcome';
            },
            link: function ($scope, $element, $attrs) {
                $scope.welcome = 'HEre';
            }
        };
    });