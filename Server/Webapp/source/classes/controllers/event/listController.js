define(["require", "exports", "../../model/event"], function (require, exports, Event) {
    var EventListController = (function () {
        function EventListController(scope, eventRepository) {
            var _this = this;
            this.scope = scope;
            this.eventRepository = eventRepository;
            this.events = [];
            eventRepository.all().then(function (promise) {
                promise.data.events.forEach(function (eventDto) {
                    _this.events.push(Event.createFromDTO(eventDto));
                });
            });
        }
        EventListController.$inject = [
            '$scope',
            'EventRepository'
        ];
        return EventListController;
    })();
    return EventListController;
});
