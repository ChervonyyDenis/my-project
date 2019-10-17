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
                    $scope.ngModelController.$setViewValue($scope.selectedOption);
                };

                $scope.resetSelection = function () {
                    $scope.isDropdownOpened = false;
                    $scope.selectedOption = null;
                    $scope.ngModelController.$setValidity('required', false);
                };
            },

            link: function ($scope, $element, attr, ngModelController) {
                var resetBtn = $element.find('button');

                $scope.ngModelController = ngModelController;
                ngModelController.$render = function () {
                    $scope.selectedOption = ngModelController.$viewValue;
                };

                $element.on('click', function (e) {
                    if (e.target !== resetBtn[0]) {
                        $scope.onDropdownOpen();
                    }
                });

                $scope.onDropdownOpen = function () {
                    $document.on('click', onDocumentClick);
                    ngModelController.$setTouched();
                    $scope.$apply(function () {
                        $scope.isDropdownOpened = !$scope.isDropdownOpened;
                    });
                    if (!ngModelController.$viewValue && ngModelController.$touched) {
                        ngModelController.$setValidity('required', false);
                    }
                };

                function onDocumentClick(e) {
                    if (!$element[0].contains(e.target) && $scope.isDropdownOpened) {
                        $scope.$apply(function () {
                            $scope.isDropdownOpened = false;
                        });
                        $document.off('click', onDocumentClick);
                    }
                }
            }
        };
    });
