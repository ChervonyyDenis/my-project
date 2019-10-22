angular.module('AppModule')
    .controller('rootController', function ($scope) {
        $scope.setInspectorConfiguration = function () {
            $scope.inspectorConfiguration = {
                inspectorConfiguration: {
                    name: {
                        type: 'inspector-text-field',
                        required: true,
                        index: 3
                    },
                    description: {
                        type: 'inspector-number-field',
                        index: 2
                    }
                },
                configData: {
                    name: '123',
                    description: 2
                }
            };
        };
    });
