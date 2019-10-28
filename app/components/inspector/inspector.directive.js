angular.module('InspectorModule')
    .directive('inspector', function ($timeout) {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: 'app/components/inspector/inspector.html',
            scope: {
                elementModel: '='
            },
            controller: function ($scope) {
                $scope.updateModelValueByPropertyName = function (propertyName, value) {
                    $scope.elementModel.data[propertyName] = value;
                };

                $scope.$watch('elementModel', function (newVal) {
                    if (newVal && newVal.inspectorConfiguration) {
                        $scope.inspectorConfiguration = Object.keys(newVal.inspectorConfiguration)
                            .map(function (property) {
                                return {propertyName: property, propertyConfig: newVal.inspectorConfiguration[property]};
                            });
                    }
                });
            }
        };
    });
