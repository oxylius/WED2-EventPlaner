define(["require", "exports", "../../model/event"], function (require, exports, Event) {
    var EventAddController = (function () {
        function EventAddController(scope, routeParams, eventRepository, $location) {
            var _this = this;
            this.scope = scope;
            this.routeParams = routeParams;
            this.eventRepository = eventRepository;
            this.$location = $location;
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
            this.$location.path('/events/' + this.event.id);
        };
        EventAddController.prototype.editEvent = function (event) {
            this.eventRepository.edit(event);
            this.$location.path('/events/' + this.event.id);
        };
        EventAddController.$inject = [
            '$scope',
            '$routeParams',
            'EventRepository',
            '$location'
        ];
        return EventAddController;
    })();
    return EventAddController;
});
