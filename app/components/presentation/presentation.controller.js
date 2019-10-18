angular.module('PresentationModule')
    .controller('PresentationController', ['$scope', 'SharedService', function ($scope, shared) {
        $scope.elementConfiguration = [
            {
                fieldType: 'input',
                fieldDataType: 'text',
                label: 'header',
                value: '',
                required: false,
                disabled: false
            },
            {
                fieldType: 'input',
                fieldDataType: 'number',
                label: 'width',
                value: 0,
                required: true,
                disabled: false
            },
            {
                fieldType: 'input',
                fieldDataType: 'number',
                label: 'height',
                value: 0,
                required: true,
                disabled: false
            },
            {
                fieldType: 'select',
                fieldDataType: null,
                label: 'Select',
                options: [
                    {displayValue: 'One', value: 1},
                    {displayValue: 'Two', value: 2},
                    {displayValue: 'Three', value: 3}
                ],
                selectedOption: null,
                required: false,
                disabled: false
            }
        ];
        $scope.elementModel = {
            inspectorConfiguration: {
                name: {
                    type: 'inspector-text-field',
                    label: 'Name',
                    required: true,
                    index: 1
                },
                description: {
                    type: 'inspector-text-field',
                    label: 'Description',
                    index: 2
                }
            }
        };
        $scope.pushElementConfiguration = function () {
            shared.saveToLocalStorage($scope.elementConfiguration);
        };
        //inspector-text
        //inspector-number-field
    }]);