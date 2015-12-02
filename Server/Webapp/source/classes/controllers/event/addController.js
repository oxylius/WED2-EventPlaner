define(["require", "exports", "../../model/event"], function (require, exports, Event) {
    var EventAddController = (function () {
        function EventAddController(scope, eventRepository) {
            this.scope = scope;
            this.eventRepository = eventRepository;
            this.event = new Event();
            this.editMode = false;
        }
        EventAddController.prototype.addEvent = function (event) {
            this.eventRepository.add(event);
        };
        EventAddController.$inject = [
            '$scope',
            'EventRepository'
        ];
        return EventAddController;
    })();
    return EventAddController;
});
