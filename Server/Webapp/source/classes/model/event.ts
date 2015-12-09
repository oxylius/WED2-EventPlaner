///<reference path="../../typings/tsd.d.ts"/>

import UuidService = require("../services/uuidService");

import Location = require("./location");
import Times = require("./Times");

class Event {
    constructor(
        public name: string = "",
        public targetGroup: string = "",
        public location: Location = new Location(),
        public maximalAmountOfGuests: number = null,
        public eventGift: string = "",
        public description: string = "",
        public id: string = null,
        public times : Times = new Times(0, 0)) {
        this.id = id || UuidService.getRandomUuid();

    }

    static createFromDTO(jsonData: any): Event {
        if (!jsonData.times) {
            jsonData.times = new Times(0, 0);
        }
        return new Event(
            jsonData.name,
            jsonData.targetGroup,
            jsonData.location,
            jsonData.maximalAmountOfGuests,
            jsonData.eventGift,
            jsonData.description,
            jsonData.id,
            new Times(jsonData.times.begin, jsonData.times.end));
    }
}

export = Event;