angular.module('InspectorModule')
    .directive('inspector', ['SharedService', function (shared) {
        return {
            restrict: 'E',
            require: 'ngModel',
            templateUrl: 'app/components/inspector/inspector.html',
            scope: {},
            controller: function ($scope) {
                $scope.saveConfiguration = function () {
                    shared.saveToLocalStorage($scope.configuration);
                    $scope.configuration = [];
                    console.log('save', shared.getFromLocalStorage());
                };
            },
            link: function ($scope, $element, $attrs, ngModelCtrl) {
                ngModelCtrl.$render = function () {
                    $scope.configuration = ngModelCtrl.$viewValue;
                };
            }
        };
    }]);