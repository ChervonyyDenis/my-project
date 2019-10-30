angular.module('DesignerModule')
    .directive('designer', function ($injector, viewComponent, baseViewComponentManager, localStorage, $routeParams) {
        return {
            restrict: 'E',
            templateUrl: 'app/components/designer/designer.html',

            controller: function ($scope) {
                $scope.componentDescriptors = viewComponent.getComponentDescriptors();

                $scope.selectedComponent = null;

                (function () {
                    var templateView = localStorage.getSavedTemplate(Number($routeParams.templateId));

                    $scope.canvasComponentModels = templateView ? templateView.template || [] : [];
                })();

                $scope.onAddComponent = function (componentDescriptor) {
                    var manager = componentDescriptor.manager ? $injector.get(componentDescriptor.manager) : baseViewComponentManager;

                    $scope.canvasComponentModels.push(manager.getModel({name: componentDescriptor.name}));
                };

                $scope.saveViewTemplateToLocalStorage = function (saveName) {
                    var saveObj = {
                        id: localStorage.generateSaveId(),
                        name: saveName,
                        template: $scope.canvasComponentModels
                    };

                    localStorage.saveToLocalStorage(saveObj);
                };
            }
        };
    });
