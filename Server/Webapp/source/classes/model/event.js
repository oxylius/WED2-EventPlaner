///<reference path="../../typings/tsd.d.ts"/>
define(["require", "exports", "../services/uuidService"], function (require, exports, UuidService) {
    var Event = (function () {
        function Event(name, targetGroup, location, maximalAmountOfGuests, eventGift, description, id, times) {
            if (name === void 0) { name = ""; }
            if (targetGroup === void 0) { targetGroup = ""; }
            if (location === void 0) { location = ""; }
            if (maximalAmountOfGuests === void 0) { maximalAmountOfGuests = null; }
            if (eventGift === void 0) { eventGift = ""; }
            if (description === void 0) { description = ""; }
            if (id === void 0) { id = null; }
            if (times === void 0) { times = { begin: "", end: "" }; }
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
        Object.defineProperty(Event.prototype, "begin", {
            get: function () {
                return this.times.begin;
            },
            set: function (begin) {
                this.times.begin = begin;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Event.prototype, "end", {
            get: function () {
                return this.times.end;
            },
            set: function (end) {
                this.times.end = end;
            },
            enumerable: true,
            configurable: true
        });
        Event.createFromDTO = function (jsonData) {
            return new Event(jsonData.name, jsonData.targetGroup, jsonData.location, jsonData.maximalAmountOfGuests, jsonData.eventGift, jsonData.description, jsonData.id, jsonData.times);
        };
        return Event;
    })();
    return Event;
});
