///<reference path="../../typings/tsd.d.ts"/>
define(["require", "exports", "../services/uuidService", "./location", "./Times"], function (require, exports, UuidService, Location, Times) {
    var Event = (function () {
        function Event(name, targetGroup, location, maximalAmountOfGuests, eventGift, description, id, times) {
            if (name === void 0) { name = ""; }
            if (targetGroup === void 0) { targetGroup = ""; }
            if (location === void 0) { location = new Location(); }
            if (maximalAmountOfGuests === void 0) { maximalAmountOfGuests = null; }
            if (eventGift === void 0) { eventGift = ""; }
            if (description === void 0) { description = ""; }
            if (id === void 0) { id = null; }
            if (times === void 0) { times = new Times(0, 0); }
            this.name = name;
            this.targetGroup = targetGroup;
            this.location = location;
            this.maximalAmountOfGuests = maximalAmountOfGuests;
            this.eventGift = eventGift;
            this.description = description;
            this.id = id;
            this.times = times;
            this.id = id || UuidService.getRandomUuid();
        }
        Event.createFromDTO = function (jsonData) {
            if (!jsonData.times) {
                jsonData.times = new Times(0, 0);
            }
            return new Event(jsonData.name, jsonData.targetGroup, jsonData.location, jsonData.maximalAmountOfGuests, jsonData.eventGift, jsonData.description, jsonData.id, new Times(jsonData.times.begin, jsonData.times.end));
        };
        return Event;
    })();
    return Event;
});
