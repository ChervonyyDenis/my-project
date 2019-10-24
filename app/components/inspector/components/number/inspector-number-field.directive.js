angular.module('InspectorModule')
    .directive('inspectorNumberField', function () {
        return {
            restrict: 'E',
            template: '<label class="field_label">{{configuration.label}}' +
                      '<input type="number" class="field"' +
                      ' ng-model="value"' +
                      ' ng-required="configuration.required"' +
                      ' ng-disabled="configuration.disabled"' +
                      ' ng-blur="onValueChange({value: value})">' +
                      '</label>',
            scope: {
                configuration: '=',
                value: '=',
                onValueChange: '&'
            }
            // controller: function ($scope) {
            // },
            // link: function ($scope, $element, attrs) {
            // }
        };
    });