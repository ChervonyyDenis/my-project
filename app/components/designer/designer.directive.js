angular.module('DesignerModule')
    .directive('designer', function ($injector, viewComponent, baseViewComponentManager) {
        return {
            restrict: 'E',
            templateUrl: 'app/components/designer/designer.html',

            controller: function ($scope) {
                $scope.componentDescriptors = viewComponent.getComponentDescriptors();

                $scope.canvasComponentModels = [];

                $scope.selectedComponent = null;

                $scope.onAddComponent = function (componentDescriptor) {
                    var manager = componentDescriptor.manager ? $injector.get(componentDescriptor.manager) : baseViewComponentManager;

                    $scope.canvasComponentModels.push(manager.getModel({name: componentDescriptor.name}));
                };
            }
        };
    });
