angular.module('DesignerModule')
    .directive('designer', function () {
        return {
            restrict: 'E',
            template: '<palette on-item-select="onItemSelect(selectedProperty)" items="itemList"></palette>' +

                      '<canvas items="addedItems" selected-item-index="selectedItemIndex"' +
                      ' on-click-item="onDbClickCanvasItem(propertyName, itemIndex, itemValue)"></canvas>' +

                      '<inspector element-model="elementModel"></inspector>',
            controller: function ($scope) {
                $scope.items = {
                    foo: {
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
                    bar: {
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
                };
                $scope.itemList = Object.keys($scope.items);

                $scope.addedItems = [];

                $scope.onItemSelect = function (selectedProperty) {
                    var tempObj = {propertyName: selectedProperty, value: $scope.items[selectedProperty]};

                    $scope.addedItems.push(tempObj);
                };
            },
            link: function ($scope, $element, attrs) {
                $scope.onDbClickCanvasItem = function (propertyName, itemIndex, itemValue) {
                    $scope.selectedItemIndex = itemIndex;
                    $scope.elementModel = itemValue;
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
