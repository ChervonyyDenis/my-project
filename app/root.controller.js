angular.module('AppModule')
    .controller('rootController', function ($scope) {
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

        $scope.user = {
            bornCountry: $scope.mockData[0],
            liveCountry: ''
        };
    });