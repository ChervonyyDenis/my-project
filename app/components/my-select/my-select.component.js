angular.module('MySelectModule')
    .directive('mySelect', function ($document) {
        return {
            restrict: 'E',
            templateUrl: 'app/components/my-select/my-select.component.html',

            scope: {
                options: '=',
                placeholder: '@'
            },

            require: 'ngModel',

            controller: function ($scope) {
                $scope.isDropdownOpened = false;

                $scope.onOptionChoose = function (option) {
                    $scope.selectedOption = option;
                    $scope.ngModelController.$setTouched();
                    $scope.ngModelController.$setViewValue($scope.selectedOption);
                };

                $scope.resetSelection = function () {
                    $scope.selectedOption = null;
                    $scope.isDropdownOpened = false;
                    $scope.ngModelController.$setTouched();
                    $scope.ngModelController.$setValidity('required', false);
                };
            },

            link: function ($scope, $element, attr, ngModelController) {
                var resetBtn = $element.find('button');

                $scope.ngModelController = ngModelController;

                ngModelController.$render = function () {
                    $scope.selectedOption = ngModelController.$viewValue;
                };

                $document.on('click', function (e) {
                    $scope.$apply(function () {
                        $scope.isDropdownOpened = $element[0].contains(e.target) &&
                            !$scope.isDropdownOpened && resetBtn[0] !== e.target;
                        if (!ngModelController.$viewValue) {
                            ngModelController.$setValidity('required', false);
                        }
                    });
                });
            }
        };
    });
