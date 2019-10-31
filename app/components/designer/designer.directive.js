angular.module('DesignerModule')
    .directive('designer', function ($injector, viewComponent, baseViewComponentManager, localStorage, $routeParams) {
        return {
            restrict: 'E',
            templateUrl: 'app/components/designer/designer.html',

            controller: function ($scope) {
                $scope.componentDescriptors = viewComponent.getComponentDescriptors();

                $scope.selectedComponent = null;

                $scope.canvasComponentModels = [];

                $scope.createModels = function (componentDescriptor, data) {
                    var manager = componentDescriptor.manager ? $injector.get(componentDescriptor.manager) : baseViewComponentManager;

                    $scope.canvasComponentModels.push(
                        manager.getModel({
                            type: componentDescriptor.type,
                            name: componentDescriptor.name,
                            data: data
                        }));
                };

                $scope.onAddNewComponent = function (componentDescriptor) {
                    $scope.createModels(componentDescriptor, {});
                };

                ($scope.initializeCanvasComponentModels = function () {
                    localStorage.getSavedDefinition(Number($routeParams.definitionId))
                        .then(function (definition) {
                            definition.forEach(function (model) {
                                $scope.createModels(viewComponent.getComponentDescriptor(model.type), model.data);
                            });
                        }, function (reason) {
                            console.log(reason);
                        });
                })();

                $scope.saveDefinitionToLocalStorage = function (saveName) {
                    var canvasModels = $scope.canvasComponentModels.map(function (model) {
                        return {type: model.type, data: model.data || {}};
                    });

                    localStorage.saveToLocalStorage(saveName, canvasModels);
                };
            }
        };
    });
