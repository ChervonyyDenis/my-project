angular.module('AppModule')
    .controller('rootController', function ($scope) {
        $scope.setInspectorConfiguration = function () {
            $scope.inspectorConfiguration = {
                inspectorConfiguration: {
                    name: {
                        type: 'inspector-text-field',
                        required: true,
                        index: 1,
                    },
                    description: {
                        type: 'inspector-text-field',
                        index: 2
                    }
                },
                data: {
                    name: ''
                }
            };
        };
    });
