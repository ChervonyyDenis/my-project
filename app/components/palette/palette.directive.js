angular.module('DesignerModule')
    .directive('palette', function () {
        return {
            restrict: 'E',
            templateUrl: 'app/components/palette/palette.html',
            replace: true,
            scope: {
                items: '=',
                onItemSelect: '&'
            },
            controller: function ($scope) {
            },
            link: function ($scope, $element, attrs) {
            }
        };
    });