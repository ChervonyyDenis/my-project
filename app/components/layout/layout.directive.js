angular.module('LayoutModule')
    .directive('layout', function ($location) {
        return {
            restrict: 'E',
            replace: true,
            scope: {},
            templateUrl: 'app/components/layout/layout.html',
            controller: function ($scope) {
                $scope.navigationItems = [
                    {displayValue: 'Dashboard', route: '/', isChosen: false}
                ];

                $scope.navigationItems
                    .filter(function (item) {
                        return item.route === $location.path();
                    })
                    .map(function (item) {
                        item.isChosen = true;

                        return true;
                    });

                $scope.onChooseItem = function (item) {
                    $location.url(item.route);
                    $scope.navigationItems.map(function (navigationItem) {
                        navigationItem.isChosen = false;

                        return false;
                    });
                    item.isChosen = true;
                };
            },
            link: function ($scope, $element, attrs) {
            }
        };
    });