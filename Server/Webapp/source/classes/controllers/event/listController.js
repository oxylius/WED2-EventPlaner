///<reference path="../../../typings/tsd.d.ts"/>
define(["require", "exports"], function (require, exports) {
    var EventListController = (function () {
        function EventListController(eventRepository) {
            var _this = this;
            eventRepository.all().then(function (data) {
                _this.events = data;
            });
        }
        return EventListController;
    })();
    return EventListController;
});
