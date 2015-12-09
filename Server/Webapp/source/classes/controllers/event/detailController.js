define(["require", "exports", "../../model/event"], function (require, exports, Event) {
    var DetailController = (function () {
        function DetailController(scope, routeParams, eventRepository, guestRepository) {
            var _this = this;
            this.scope = scope;
            this.routeParams = routeParams;
            this.eventRepository = eventRepository;
            this.guestRepository = guestRepository;
            eventRepository.get(this.routeParams.eventId).then(function (promise) {
                _this.event = Event.createFromDTO(promise.data);
            });
        }
        DetailController.$inject = [
            '$scope',
            '$routeParams',
            'EventRepository',
            'GuestRepository'
        ];
        return DetailController;
    })();
    return DetailController;
});
