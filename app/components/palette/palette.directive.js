angular.module('DesignerModule')
    .directive('palette', function () {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: 'app/components/palette/palette.html',

            scope: {
                components: '=',
                onAddComponent: '&'
            }
        };
    });