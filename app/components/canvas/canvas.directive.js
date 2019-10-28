angular.module('DesignerModule')
    .directive('canvas', function () {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: 'app/components/canvas/canvas.html',

            scope: {
                components: '=',
                selectedComponent: '='
            },

            controller: function ($scope) {
                $scope.onSelectElement = function (element) {
                    $scope.selectedComponent = element;
                };
            }
        };
    });