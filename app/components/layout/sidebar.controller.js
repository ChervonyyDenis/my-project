angular.module('LayoutModule')
    .controller('SidebarController', function ($scope, SharedService) {
        $scope.message = 'sidebar here';
        $scope.sideNavigationItems = [
            {displayValue: '', route: ''}
        ];
        $scope.selectedList = [];
        SharedService.getList().then(function (res) {
            $scope.selectedList = res;
        });
    });