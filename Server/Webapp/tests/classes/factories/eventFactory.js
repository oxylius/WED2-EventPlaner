define(["require", "exports", "../../../source/classes/model/event", "../../../source/classes/model/location", "../../../source/classes/model/times"], function (require, exports, Event, Location, Times) {
    var EventFactory = (function () {
        function EventFactory() {
        }
        EventFactory.createEvent = function (identifier) {
            if (identifier === void 0) { identifier = null; }
            return new Event('Simons birthday', 'Friends of Simon', new Location('Simons house', 'Main street 5', 8000, 'Zürich'), null, 'The greatest birthday party simon ever had', 'drinks, cake, salad or snacks', identifier, new Times(new Date('2015-10-10T18:00:00.000Z'), new Date('2015-10-11T02:00:00.000Z')));
        };
        return EventFactory;
    })();
    return EventFactory;
});
