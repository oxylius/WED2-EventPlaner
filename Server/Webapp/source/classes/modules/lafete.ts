///<reference path="../../typings/tsd.d.ts"/>
import IRouteProvider = angular.route.IRouteProvider;

//import Event = require("../model/event");
//import Guest = require("../model/guest");
import EventRepository = require("../repository/eventRepository");
import GuestRepository = require("../repository/guestRepository ");
import EventListController = require("../controllers/event/listController");
import EventDetailController = require("../controllers/event/detailController");


//define(['frameworks/angular', 'app/controllers/event/listController', 'app/controllers/event/detailController', 'app/controllers/event/addController', 'app/repository/eventRepository', 'app/repository/guestRepository', 'libraries/angularRoute'],
//	function (Angular, EventListController, EventDetailController, EventAddController, EventRepository, GuestRepository) {
//	'use strict';

//	/* modules */
var Lafete = angular.module('lafete',['ngRoute']);

/* services */
Lafete.service('EventRepository', EventRepository);
Lafete.service('GuestRepository', GuestRepository);

/* controllers */
Lafete.controller('EventListController', EventListController);

//EventDetailController.$inject = ['$scope', '$routeParams', 'EventRepository', 'GuestRepository'];
Lafete.controller('EventDetailController', EventDetailController);

//EventAddController.$inject = ['$scope', 'EventRepository'];
//Lafete.controller('EventAddController', EventAddController);

/* routes */
Lafete.config(function($routeProvider: IRouteProvider) {
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
        controller: 'EventAddController',
        templateUrl: './views/event/add.html'
    })
	.otherwise({
		redirectTo: '/list'
	});
});

export = Lafete;
