angular.module('AppModule', [
    'ngRoute',
    'MySelectModule',
    'DashboardModule',
    'StatisticModule',
    'LayoutModule'
]).config(function ($routeProvider) {
    $routeProvider.when('/', {
        controller: 'DashboardController',
        templateUrl: 'app/components/dashboard/dashboard.html'
    })
        .when('/statistic/:id', {
            controller: 'StatisticController',
            templateUrl: 'app/components/statistic/statistic.html'
        })
        .otherwise({
            redirectTo: '/'
        });
});