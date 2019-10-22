angular.module('InspectorModule')
    .directive('inspectorNumberField', function () {
        return {
            restrict: 'E',
            template: '<label class="filed_label">{{property}}' +
                '<input type="number" class="field"' +
                ' ng-model="fieldValue"' +
                ' ng-required="config.required"' +
                ' ng-disabled="config.disabled"' +
                ' ng-blur="onFieldBlur()">' +
                '</label>',
            controller: function ($scope) {
                $scope.$on('fieldsValueEvent', function (event, data) {
                    var key = Object.keys(data)
                        .filter(function (key) {
                            return key === $scope.property;
                        });

                    $scope.fieldValue = data[key];
                });

                $scope.onFieldBlur = function () {
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