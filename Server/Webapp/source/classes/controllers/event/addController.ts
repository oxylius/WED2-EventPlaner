define([], function() {
    'use strict';

    var EventAddController = function ($scope, EventRepository) {
        this.scope = $scope;
        this.addEvent = function (event) {
            Console.log(event);
            EventRepository.add(event, function () {

            })
        }
    }

    return EventAddController;
})