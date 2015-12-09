import Scope = angular.IScope;
import RouteParams = angular.route.IRouteParamsService;

import Event = require("../../model/event");

import EventRepository = require("../../repository/eventRepository");
import GuestRepository = require("../../repository/guestRepository");

class DetailController {
    private event: Event;

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
    }
}

export = DetailController;
