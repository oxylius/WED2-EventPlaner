define(["require", "exports"], function (require, exports) {
    var EventRepository = (function () {
        function EventRepository() {
        }
        return EventRepository;
    })();
    define(['app/model/event'], function (Event) {
        'use strict';
        var EventRepository = function ($http) {
            this.urls = {
                all: '/api/events',
                get: '/api/events/:eventId',
                add: '/api/events',
                edit: '/api/events/:eventId'
            };
            this.events = [];
            /**
             * Get all events
             *
             * @return Event[]
             */
            this.all = function (successCallback) {
                $http.get(this.urls.all)
                    .success(function (data) {
                    // map applys a function on every element in the array and returns the result as new array
                    var events = data.events.map(function (eventDTO) {
                        return Event.createFromDTO(eventDTO);
                    });
                    successCallback(events);
                });
            };
            /**
             * Find event by identifier
             *
             * @param string identifier
             */
            this.get = function (event, successCallback) {
                $http.get(this.urls.get.replace(':eventId', event))
                    .success(function (eventDTO) {
                    successCallback(Event.createFromDTO(eventDTO));
                });
            };
            /**
             * Add event
             * @param Event event
             */
            this.add = function (event, successCallback) {
                $http.post(this.urls.add, event)
                    .success(function (eventDTO) {
                    successCallback(Event.createFromDTO(eventDTO));
                });
            };
            this.edit = function (event, successCallback) {
                $http.post(this.urls.edit.replace(':eventId', event.id), event)
                    .success(function (eventDTO) {
                    successCallback(Event.createFromDTO(eventDTO));
                });
            };
        };
        return EventRepository;
    });
    return EventRepository;
});
