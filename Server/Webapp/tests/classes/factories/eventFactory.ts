import Event = require("../../../source/classes/model/event");
import Location = require("../../../source/classes/model/location");
import Times = require("../../../source/classes/model/times");

class EventFactory {
    constructor() {}

    static createEvent(identifier: string = null): Event {
        return new Event(
            'Simons birthday',
            'Friends of Simon',
            new Location('Simons house', 'Main street 5', 8000, 'Zürich'),
            null,
            'The greatest birthday party simon ever had',
            'drinks, cake, salad or snacks',
            identifier,
            new Times(new Date('2015-10-10T18:00:00.000Z'), new Date('2015-10-11T02:00:00.000Z'))
        );
    }
}

export = EventFactory;
