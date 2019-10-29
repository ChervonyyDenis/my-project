angular.module('InspectorModule')
    .directive('inspectorColorField', function () {
        return {
            restrict: 'E',
            template: '<label class="field_label">{{configuration.label}}' +
                '<input type="color" class="field"' +
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
        };
    });