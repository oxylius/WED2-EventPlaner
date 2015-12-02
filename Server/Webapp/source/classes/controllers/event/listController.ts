import Scope = angular.IScope;

import Event = require("../../model/event");
import EventRepository = require("../../repository/eventRepository");

class EventListController {
    static $inject = [
        '$scope',
        'EventRepository'
    ];

    private events: Array<Event>;
    
    constructor(private scope: Scope, private eventRepository: EventRepository) {
        this.events = [];
        eventRepository.all().then((promise) => {
            promise.data.events.forEach((eventDto: any) => {
                this.events.push(Event.createFromDTO(eventDto));
            });
        });
    }
}

export = EventListController;
