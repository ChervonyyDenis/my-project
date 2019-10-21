angular.module('AppModule', [
    'ngRoute',
    'MySelectModule',
    'LayoutModule',
    'DashboardModule',
    'AboutModule',
    'ServicesModule',
    'InspectorModule',
    'PresentationModule',
]).config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'app/components/dashboard/dashboard.html',
            controller: 'DashboardController'
        })
        .when('/about', {
            templateUrl: 'app/components/about/about.html',
            controller: 'AboutController'
        })
        .when('/presentation', {
            templateUrl: 'app/components/presentation/presentation.html',
            controller: 'PresentationController'
        })
        .otherwise({
            redirectTo: '/'
        });
});
