define(["require", "exports", "../../model/event"], function (require, exports, Event) {
    var EventAddController = (function () {
        function EventAddController(scope, routeParams, eventRepository) {
            var _this = this;
            this.scope = scope;
            this.routeParams = routeParams;
            this.eventRepository = eventRepository;
            this.editMode = false;
            if (this.routeParams.eventId != null) {
                this.editMode = true;
                this.eventRepository.get(this.routeParams.eventId).then(function (promise) {
                    _this.event = Event.createFromDTO(promise.data);
                });
            }
            else {
                this.event = new Event();
            }
        }
        EventAddController.prototype.addEvent = function (event) {
            console.log("ADD EVENT:");
            console.log(event);
            this.eventRepository.add(event);
        };
        EventAddController.prototype.editEvent = function (event) {
            console.log(this.eventRepository.edit(event));
        };
        EventAddController.$inject = [
            '$scope',
            '$routeParams',
            'EventRepository'
        ];
        return EventAddController;
    })();
    return EventAddController;
});
