///<reference path="../../../typings/tsd.d.ts"/>

import Event = require("../../model/event");
import EventRepository = require("");

class EventListController {
    private events : Array<Event>;
    constructor(eventRepository : EventRepository) {
        eventRepository.all().then(data => {
            this.events = data;
        });
    }
}

export = EventListController;
