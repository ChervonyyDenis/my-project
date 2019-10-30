angular.module('HomeModule')
    .directive('savedViews', function (localStorage, $location) {
        return {
            restrict: 'E',
            templateUrl: 'app/components/home/saved-views.html',
            scope: {},
            controllerAs: 'savedViews',
            controller: function ($scope) {
                $scope.savedTemplates = localStorage.getSavedTemplates();

                $scope.redirectToTemplate = function (templateId) {
                    $location.path('/designer/' + templateId);
                };
            }
        };
    });