angular.module('InspectorModule')
    .directive('inspectorTextField', function () {
        return {
            restrict: 'E',
            template: '<label class="filed_label">{{property}}' +
                '<input type="text" class="field"' +
                ' ng-required="config.required"' +
                ' ng-disabled="config.disabled"' +
                ' ng-model="fieldValue"' +
                ' ng-blur="onFieldBlurred()">' +
                '</label>',
            controller: function ($scope) {
                $scope.$on('fieldsValueEvent', function (event, data) {
                    var key = Object.keys(data)
                        .filter(function (key) {
                            return key === $scope.property;
                        });

                    $scope.fieldValue = data[key];
                });

                $scope.onFieldBlurred = function () {
                    $scope.$emit('InspectorValueChange', {
                        fieldName: $scope.property,
                        value: $scope.fieldValue
                    });
                };
            },
            link: function ($scope, $element, attrs) {
            }
        };
    });
