angular.module('DesignerModule')
    .directive('canvas', function () {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                items: '=',
                onClickItem: '&',
                selectedItemIndex: '='
            },
            templateUrl: 'app/components/canvas/canvas.html',
            controller: function ($scope) {

            },
            link: function ($scope, $element, attrs) {

            }
        };
    });