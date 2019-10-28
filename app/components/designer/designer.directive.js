angular.module('DesignerModule')
    .directive('designer', function ($injector, viewComponent, baseViewComponentManager) {
        return {
            restrict: 'E',
            templateUrl: 'app/components/designer/designer.html',

            controller: function ($scope) {
                $scope.componentDescriptors = viewComponent.getComponentDescriptors();

                $scope.componentModels = [
                    {
                        displayName: 'FOO',
                        inspectorConfiguration: {
                            name: {
                                type: 'inspector-text-field',
                                label: 'name',
                                required: true,
                                index: 2
                            },
                            description: {
                                type: 'inspector-text-field',
                                label: 'description',
                                index: 1
                            }
                        },
                        data: {
                            name: 'foo',
                            description: 'color is blue'
                        }
                    },
                    {
                        displayName: 'BAR',
                        inspectorConfiguration: {
                            name: {
                                type: 'inspector-text-field',
                                label: 'name',
                                required: true,
                                index: 2
                            },
                            description: {
                                type: 'inspector-text-field',
                                label: 'description',
                                index: 1
                            }
                        },
                        data: {
                            name: 'bar',
                            description: 'color is green'
                        }
                    }
                ];

                $scope.canvasComponentModels = [];
                $scope.selectedComponent = null;

                $scope.onAddComponent = function (componentDescriptor) {
                    var manager = componentDescriptor.manager ? $injector.get(componentDescriptor.manager) : baseViewComponentManager;

                    $scope.canvasComponentModels.push(manager.getModel({name: componentDescriptor.name}));
                };
            }
        };
    });
