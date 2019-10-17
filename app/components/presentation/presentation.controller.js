angular.module('PresentationModule')
    .controller('PresentationController', ['$scope', 'SharedService', function ($scope, shared) {
        $scope.elementConfiguration = [
            {
                fieldType: 'input',
                fieldDataType: 'text',
                label: 'header',
                required: false,
                disabled: false
            },
            {
                fieldType: 'input',
                fieldDataType: 'number',
                label: 'width',
                required: true,
                disabled: false
            },
            {
                fieldType: 'input',
                fieldDataType: 'number',
                label: 'height',
                required: true,
                disabled: false
            },
            {
                fieldType: 'select',
                fieldDataType: null,
                label: 'Select',
                required: false,
                disabled: false
            }
        ];
        $scope.pushElementConfiguration = function () {
            shared.saveElementConfiguration($scope.elementConfiguration);
        };
    }]);