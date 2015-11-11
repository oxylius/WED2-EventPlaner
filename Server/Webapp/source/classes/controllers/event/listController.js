define(['app/model/event'], function(Event) {
	'use strict';

	var EventListController = function($scope, eventRepository) {
		this.scope = $scope;
		eventRepository.all(function(events) {
			this.scope.events = events;
		}.bind(this));
	};

	return EventListController;
});
