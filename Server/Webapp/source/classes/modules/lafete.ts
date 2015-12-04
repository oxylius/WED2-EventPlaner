///<reference path="../../typings/tsd.d.ts"/>
import IRouteProvider = angular.route.IRouteProvider;

import EventRepository = require("../repository/eventRepository");
import GuestRepository = require("../repository/guestRepository ");
import EventListController = require("../controllers/event/listController");
import EventDetailController = require("../controllers/event/detailController");
import EventAddController = require("../controllers/event/addController");



//	/* modules */
var Lafete = angular.module('lafete',['ngRoute']);

/* services */
Lafete.service('EventRepository', EventRepository);
Lafete.service('GuestRepository', GuestRepository);

/* controllers */
Lafete.controller('EventListController', EventListController);
Lafete.controller('EventDetailController', EventDetailController);
Lafete.controller('EventAddController', EventAddController);

/* routes */
Lafete.config(($routeProvider: IRouteProvider) => {
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

export = Lafete;
