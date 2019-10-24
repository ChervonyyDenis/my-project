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
                    if (newVal) {
                        $scope.inspectorConfiguration = Object.keys(newVal.inspectorConfiguration)
                            .map(function (propertyName) {
                                return {
                                    propertyName: propertyName,
                                    configuration: newVal.inspectorConfiguration[propertyName]
                                };
                            });
                    }
                });
            },
            link: function ($scope, $element, $attrs) {
            }
        };
    });