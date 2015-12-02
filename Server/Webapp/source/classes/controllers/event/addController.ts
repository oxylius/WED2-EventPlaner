import Scope = angular.IScope;
import RouteParams = angular.route.IRouteParamsService;

import Event = require("../../model/event");
import EventRepository = require("../../repository/eventRepository");

class EventAddController {
    private event: Event;
    private editMode: Boolean;

    static $inject = [
        '$scope',
        '$routeParams',
        'EventRepository'
    ];

    constructor(private scope: Scope, private routeParams: RouteParams, private eventRepository: EventRepository) {
        this.editMode = false;
        if (this.routeParams.eventId != null) {
            this.editMode = true
            this.eventRepository.get(this.routeParams.eventId).then((promise) => {
                this.event = Event.createFromDTO(promise.data);
            });
        } else {
            this.event = new Event();
        }
    }

    addEvent(event:Event): void {
        this.eventRepository.add(event);
    }

    editEvent(event: Event): void {
        this.eventRepository.edit(event);
    }
}

export = EventAddController;