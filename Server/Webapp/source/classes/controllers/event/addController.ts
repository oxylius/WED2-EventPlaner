import Scope = angular.IScope;

import Event = require("../../model/event");
import EventRepository = require("../../repository/eventRepository");

class EventAddController {
    private event: Event;
    private editMode: Boolean;

    static $inject = [
        '$scope',
        'EventRepository'
    ];

    constructor(private scope: Scope, private eventRepository: EventRepository) {
        this.event = new Event();
        this.editMode = false;
    }

    addEvent(event:Event): void {
        this.eventRepository.add(event);
    }
}

export = EventAddController;