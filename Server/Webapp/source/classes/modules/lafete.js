define(["require", "exports", "../repository/eventRepository", "../repository/guestRepository ", "../controllers/event/listController", "../controllers/event/detailController", "../controllers/event/addController"], function (require, exports, EventRepository, GuestRepository, EventListController, EventDetailController, EventAddController) {
    //	/* modules */
    var Lafete = angular.module('lafete', ['ngRoute']);
    /* services */
    Lafete.service('EventRepository', EventRepository);
    Lafete.service('GuestRepository', GuestRepository);
    /* controllers */
    Lafete.controller('EventListController', EventListController);
    Lafete.controller('EventDetailController', EventDetailController);
    Lafete.controller('EventAddController', EventAddController);
    /* routes */
    Lafete.config(function ($routeProvider) {
        $routeProvider.when('/list', {
            controllerAs: 'scope',
            controller: 'EventListController',
            templateUrl: './views/event/list.html'
        })
            .when('/events/:eventId', {
            controllerAs: 'scope',
            controller: 'EventDetailController',
            templateUrl: './views/event/detail.html'
        })
            .when('/add/event', {
            controllerAs: 'scope',
            controller: 'EventAddController',
            templateUrl: './views/event/add.html'
        })
            .when('/edit/event/:eventId', {
            controllerAs: 'scope',
            controller: 'EventAddController',
            templateUrl: './views/event/add.html'
        })
            .otherwise({
            redirectTo: '/list'
        });
    });
    return Lafete;
});
