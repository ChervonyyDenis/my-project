angular.module('InspectorModule')
    .directive('inspectorField', function ($compile) {
        return {
            restrict: 'E',
            scope: true,
            link: function ($scope, $element) {
                $scope.value = $scope.elementModel.data[$scope.property.propertyName];

                $scope.onValueChange = function (value) {
                    $scope.updateModelValueByPropertyName($scope.property.propertyName, value);
                };

                $scope.compiledField = $compile(
                    '<' + $scope.property.propertyConfig.type +
                    ' value="value"' +
                    'configuration="property.propertyConfig"' +
                    ' on-value-change="onValueChange(value)"' +
                    '></' + $scope.property.propertyConfig.type + '>')($scope);

                $element.append($scope.compiledField);
            }
        };
    });
