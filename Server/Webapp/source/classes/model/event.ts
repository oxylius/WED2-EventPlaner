///<reference path="../../typings/tsd.d.ts"/>

import UuidService = require("../services/uuidService");

class Event {
    constructor(
        public name: string,
        public targetGroup: string,
        public location: string,
        public maximalAmountOfGuests: number,
        public eventGift: string = "",
        public description: string = "",
        public id: string = null,
        public times : any = null) {
        this.id = id || UuidService.getRandomUuid();

    }

    get begin(): any {
        return this.times.begin;
    }

    set begin(begin: any) {
        this.times.begin = begin;
    }

    get end(): any {
        return this.times.end;
    }

    set end(end: any) {
        this.times.end = end;
    }

    static createFromDTO(jsonData: any): Event {
        return new Event(
            jsonData.name,
            jsonData.targetGroup,
            jsonData.location,
            jsonData.maximalAmountOfGuests,
            jsonData.eventGift,
            jsonData.description,
            jsonData.id,
            jsonData.times);
    }
}

export = Event;