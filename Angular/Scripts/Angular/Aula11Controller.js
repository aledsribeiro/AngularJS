angular.module('app', ['ngRoute']).
    controller("Aula11Controller", function ($scope, $route, $routeParams, $location) {

        $scope.$route = $route;
        $scope.$location = $location;
        $scope.$routeParams = $routeParams;


    })

    .controller('InicialController', function ($scope) {
    })

    .config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'Aula11Pagina1.html',
                controller: 'InicialController'
            })
            .otherwise({
                redirectTo : '/'
            });

        $locationProvider.html5Mode(true);
    });