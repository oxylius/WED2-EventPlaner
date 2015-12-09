import Scope = angular.IScope;
import RouteParams = angular.route.IRouteParamsService;
import Location = angular.ILocationService;

import Event = require("../../model/event");
import EventRepository = require("../../repository/eventRepository");

class EventAddController {
    private event: Event;
    private editMode: Boolean;

    static $inject = [
        '$scope',
        '$routeParams',
        'EventRepository',
        '$location'
    ];

    constructor(private scope: Scope, private routeParams: RouteParams, private eventRepository: EventRepository, private $location: Location) {
        this.editMode = false;
        if (this.routeParams.eventId != null) {
            this.editMode = true;
            this.eventRepository.get(this.routeParams.eventId).then((promise) => {
                this.event = Event.createFromDTO(promise.data);
            });
        } else {
            this.event = new Event();
        }
    }

    addEvent(event: Event): void {
        console.log("ADD EVENT:");
        console.log(event);
        this.eventRepository.add(event);
        this.$location.path('/events/' + this.event.id);

    }

    editEvent(event: Event): void {
        this.eventRepository.edit(event);
        this.$location.path('/events/' + this.event.id);
    }
}

export = EventAddController;