angular.module('LayoutModule')
    .controller('SidebarController', function ($scope) {
        $scope.message = 'sidebar here';
        $scope.sideNavigationItems = [
            {displayValue: '', route: ''}
        ];
    });