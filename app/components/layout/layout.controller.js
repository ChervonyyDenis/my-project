angular.module('LayoutModule')
    .controller('LayoutController', ['$scope', '$location', 'SharedService', function ($scope, $location, shared) {
        $scope.selectedOptions = shared.getOptions();
        $scope.navigationItems = [
            {displayValue: 'Dashboard', route: '/', isChosen: false},
            {displayValue: 'About', route: '/about', isChosen: false}
        ];

        $scope.navigationItems
            .filter(function (item) {
                return item.route === $location.path();
            }).map(function (item) {
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
    }]);