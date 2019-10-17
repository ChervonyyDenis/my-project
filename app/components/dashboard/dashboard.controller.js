angular.module('DashboardModule')
    .controller('DashboardController', ['$scope', 'SharedService', function ($scope, shared) {
        $scope.mockData = [
            {displayValue: 'China', value: 1},
            {displayValue: 'USA', value: 2},
            {displayValue: 'Ukraine', value: 3},
            {displayValue: 'Russia', value: 4},
            {displayValue: 'Germany', value: 5},
            {displayValue: 'England', value: 6},
            {displayValue: 'Colombia', value: 7},
            {displayValue: 'Estonia', value: 8},
            {displayValue: 'Israel', value: 9}
        ];
        $scope.selectedOptions = {
            first: null,
            second: $scope.mockData[0]
        };

        $scope.onSubmit = function () {
            $scope.myCustomForm.$getControls().map(function (item) {
                return shared.setOptions(item.$viewValue);
            });
        };
    }]);
