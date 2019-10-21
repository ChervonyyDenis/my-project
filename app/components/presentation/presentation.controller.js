angular.module('PresentationModule')
    .controller('PresentationController', function ($scope, SharedService) {
        // $scope.elementConfiguration =
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
        // $scope.pushElementConfiguration = function () {
        //     SharedService.setInspectorConfiguration($scope.elementConfiguration);
        // };
        //inspector-text
        //inspector-number-field
    });