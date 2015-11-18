define(['frameworks/angular', 'app/controllers/event/listController', 'app/controllers/event/detailController', 'app/controllers/event/addController', 'app/repository/eventRepository', 'app/repository/guestRepository', 'libraries/angularRoute'],
	function (Angular, EventListController, EventDetailController, EventAddController, EventRepository, GuestRepository) {
	'use strict';

	/* modules */
	var Lafete = Angular.module('lafete',['ngRoute']);

	/* services */
	EventRepository.$inject = ['$http'];
	GuestRepository.$inject = ['$http'];
	Lafete.service('EventRepository', EventRepository);
	Lafete.service('GuestRepository', GuestRepository);

	/* controllers */
	EventListController.$inject = ['$scope', 'EventRepository'];
	Lafete.controller('EventListController', EventListController);

	EventDetailController.$inject = ['$scope', '$routeParams', 'EventRepository', 'GuestRepository'];
	Lafete.controller('EventDetailController', EventDetailController);

	EventAddController.$inject = ['$scope', 'EventRepository'];
	Lafete.controller('EventAddController', EventAddController);

	/* routes */
	Lafete.config(function($routeProvider) {
		$routeProvider.when('/list', {
			controller: 'EventListController',
			templateUrl: './views/event/list.html'
		})
		.when('/events/:eventId', {
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

	return Lafete;
});
