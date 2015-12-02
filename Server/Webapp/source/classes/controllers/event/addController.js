define(['app/model/event'], function (Event) {
    'use strict';

    var EventAddController = function($scope, $log, $routeParams, EventRepository) {
        this.scope = $scope;
        this.scope.editMode = false;
        if ($routeParams.eventId != null) {
            this.scope.editMode = true;
            EventRepository.get($routeParams.eventId, function (event) {
                this.scope.event = event;
            }.bind(this));
        } else {
            this.scope.event = new Event();
        }
        this.scope.addEvent = function(event) {
            $log.log(event);
            EventRepository.add(event, function (createdEvent) {
                $log.info("Event created!");
            })
        }
        this.scope.editEvent = function(event) {
            EventRepository.edit(event, function (editedEvent) {
                $log.info("Event " + editedEvent.id + " edited!");
            })
        }
    }

    return EventAddController;
})