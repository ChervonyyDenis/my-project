angular.module('InspectorModule')
    .directive('inspector', function () {
        return {
            restrict: 'E',
            templateUrl: 'app/components/inspector/inspector.html',
            scope: {
                elementModel: '='
            },
            controller: function ($scope) {
                $scope.$on('InspectorValueChange', function (event, data) {
                    $scope.elementModel.configData[data.fieldName] = data.value;
                    console.log('$scope.elementModel', $scope.elementModel);
                });

            },
            link: function ($scope, $element, $attrs) {
                $scope.$watch('elementModel', function (newVal) {
                    if (newVal) {
                        $scope.$broadcast('fieldsValueEvent', $scope.elementModel.configData);
                    }
                });
            }
        };
    });