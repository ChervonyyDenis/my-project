angular.module('AppModule')
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                template: '<saved-views></saved-views>'
            })
            .when('/designer/:definitionId', {
                template: '<designer></designer>'
            })
            .otherwise('/');
    });