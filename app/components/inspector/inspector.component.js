angular.module('InspectorModule')
    .directive('inspector', function () {
        return {
            restrict: 'E',
            templateUrl: 'app/components/inspector/inspector.html',
            scope: {
                elementModel: '='
            },
            controller: function ($scope) {
            },
            link: function ($scope, $element, $attrs) {
            }
        };
    });