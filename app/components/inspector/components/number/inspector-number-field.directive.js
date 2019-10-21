angular.module('InspectorModule')
    .directive('inspectorNumberField', function () {
        return {
            restrict: 'E',
            template: '<label class="filed_label">{{property}}' +
                      '<input type="number" class="field"' +
                      ' ng-required="config.required" ng-disabled="config.disabled">' +
                      '</label>',
            scope: false,
            controller: function ($scope) {
            },
            link: function ($scope, $element, attrs) {
            }
        };
    });