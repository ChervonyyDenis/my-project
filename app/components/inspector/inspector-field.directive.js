angular.module('InspectorModule')
    .directive('inspectorField', function ($compile) {
        return {
            restrict: 'E',
            scope: true,
            link: function ($scope, $element, attrs) {
                $scope.compiledField = $compile('<' + $scope.config.type + '></' + $scope.config.type + '>')($scope);
                $scope.compiledField.addClass('field_container');
                $element.append($scope.compiledField);
            }
        };
    });
