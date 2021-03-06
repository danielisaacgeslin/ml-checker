(() => {
    'use strict';
    angular.module('app.main', []).config(config);

    function config(
        $stateProvider: ng.ui.IStateProvider,
        $urlRouterProvider: ng.ui.IUrlRouterProvider,
        $locationProvider: ng.ILocationProvider
    ) {
        $locationProvider.html5Mode(true).hashPrefix('*');

        $urlRouterProvider.otherwise('/');

        $stateProvider.state('/', {
            url: '/',
            templateUrl: 'home/main.html',
            controller: 'mainController',
            controllerAs: 'vm'
        });
    }
})();
