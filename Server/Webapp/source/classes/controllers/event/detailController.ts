import Scope = angular.IScope;
import RouteParams = angular.route.IRouteParamsService;

import Event = require("../../model/event");
import Guest = require("../../model/guest");

import EventRepository = require("../../repository/eventRepository");
import GuestRepository = require("../../repository/guestRepository");

class DetailController {
    private event: Event;
    //private guests: Array<Guest> = [];

    static $inject = [
        '$scope',
        '$routeParams',
        'EventRepository',
        'GuestRepository'
    ];

    constructor(private scope: Scope, private routeParams: RouteParams, private eventRepository: EventRepository, private guestRepository: GuestRepository) {
        eventRepository.get(this.routeParams.eventId).then((promise) => {
            this.event = Event.createFromDTO(promise.data);
        });
        //guestRepository.all(this.routeParams.eventId).then((promise) => {
        //    promise.data.guests.forEach((guestDto: any) => {
        //        this.guests.push(Guest.createFromDto(guestDto));
        //    });
        //});
    }
}

export = DetailController;

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
