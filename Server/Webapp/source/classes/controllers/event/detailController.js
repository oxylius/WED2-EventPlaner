define(["require", "exports", "../../model/event", "../../model/guest"], function (require, exports, Event, Guest) {
    var DetailController = (function () {
        function DetailController(scope, routeParams, eventRepository, guestRepository) {
            var _this = this;
            this.scope = scope;
            this.routeParams = routeParams;
            this.eventRepository = eventRepository;
            this.guestRepository = guestRepository;
            this.guests = [];
            eventRepository.get(this.routeParams.eventId).then(function (promise) {
                _this.event = Event.createFromDTO(promise.data);
            });
            guestRepository.all(this.routeParams.eventId).then(function (promise) {
                promise.data.guests.forEach(function (guestDto) {
                    _this.guests.push(Guest.createFromDto(guestDto));
                });
            });
        }
        DetailController.$inject = [
            '$scope',
            '$routeParams',
            'EventRepository',
            'GuestRepository'
        ];
        return DetailController;
    })();
    return DetailController;
});
//define([], function () {
//	'use strict';
//	var EventDetailController = function($scope, $routeParams, EventRepository, GuestRepository) {
//		this.scope = $scope;
//        EventRepository.get($routeParams.eventId, function (event) {
//            this.scope.event = event;
//        }.bind(this));
//        GuestRepository.all($routeParams.eventId, function (guests) {
//            this.scope.guests = guests;
//        }.bind(this));
//	};
//	return EventDetailController;
//});
