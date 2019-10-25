angular.module('DesignerModule')
    .directive('palette', function (viewComponentProvider) {
        return {
            restrict: 'E',
            templateUrl: 'app/components/palette/palette.html',
            replace: true,
            scope: {
                components: '=',
                onItemSelect: '&'
            },
            controller: function ($scope) {
                console.log('palette', $scope.components);
            },
            link: function ($scope, $element, attrs) {
            }
        };
    });