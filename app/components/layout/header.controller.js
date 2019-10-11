angular.module('LayoutModule')
    .controller('HeaderController', function ($scope, $location) {
        $scope.message = 'header here';
        $scope.menuItems = [
            {displayValue: 'Statistic', route: '/statistic/1', isActive: false},
            {displayValue: 'Dashboard', route: '/', isActive: true},
        ];
        $scope.setActiveTab = function (tab) {
            $scope.menuItems.map(function (item) {
                item.isActive = false;
            });
            tab.isActive = true;
        };
        $scope.changeRoute = function (item, view) {
            $scope.setActiveTab(item);
            $location.path(view);
        };
    });