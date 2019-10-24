angular.module('InspectorModule')
    .directive('inspectorField', function ($compile) {
        return {
            restrict: 'E',
            scope: true,
            link: function ($scope, $element, attrs) {
                $scope.value = $scope.elementModel.data[$scope.propertyConfig.propertyName];

                $scope.onValueChange = function (value) {
                    $scope.updateModelValueByPropertyName($scope.propertyConfig.propertyName, value);
                };

                $scope.compiledField = $compile(
                    '<' + $scope.propertyConfig.configuration.type +
                    ' configuration="inspectorConfig"' +
                    ' value="value"' +
                    ' on-value-change="onValueChange(value)"' +
                    '></' + $scope.propertyConfig.configuration.type + '>')($scope);

                $element.append($scope.compiledField);
            }
        };
    });
