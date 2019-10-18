angular.module('InspectorModule')
    .directive('inspectorField', function ($compile) {
        return {
            restrict: 'E',
            scope: true,
            link: function ($scope, $element, attrs) {
                // $compile('<' + $scope.field.type + '></' $scope.field.type '>')($scope)
            }
        };
    });