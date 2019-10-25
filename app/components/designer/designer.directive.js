angular.module('DesignerModule')
    .directive('designer', function (viewComponentProvider) {
        return {
            restrict: 'E',
            template: '<palette on-item-select="onItemSelect(selectedProperty)" components="itemList"></palette>' +

                      '<canvas items="addedItems" selected-item-index="selectedItemIndex"' +
                      ' on-click-item="onDbClickCanvasItem(propertyName, itemIndex, itemValue)"></canvas>' +

                      '<inspector element-model="elementModel"></inspector>',
            controller: function ($scope) {
                $scope.itemList = viewComponentProvider.getRegisteredComponents();
                $scope.addedItems = [];

                $scope.onItemSelect = function (selectedComponent) {
                    var tempObj = {propertyName: selectedComponent, value: viewComponentProvider.componentsConfig[selectedComponent]};

                    $scope.addedItems.push(tempObj);
                };
            },
            link: function ($scope, $element, attrs) {
                $scope.onDbClickCanvasItem = function (propertyName, itemIndex, itemValue) {
                    $scope.selectedItemIndex = itemIndex;
                    $scope.elementModel = Object.keys(itemValue.inspectorConfiguration).map(function (propertyName) {
                        return {propertyName: propertyName, configuration: itemValue.inspectorConfiguration[propertyName]};
                    });
                };
            }
        };
    });
// $scope.tempArr = [
//     {
//         configuration: {
//             type: 'inspector-text-field',
//             label: 'name',
//             required: true,
//             index: 2
//         },
//         propertyName: 'name'
//     },
//     {
//         configuration: {
//             type: 'inspector-text-field',
//             label: 'description',
//             index: 1
//         },
//         propertyName: 'description'
//     }
// ];

//ViewComponentRegistrationService
//factory
