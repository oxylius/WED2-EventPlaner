///<reference path="../../typings/tsd.d.ts"/>

import Event = require("../model/event");

import HttpService = angular.IHttpService;
import IQService = angular.IQService;
import IPromise = angular.IPromise;

class EventRepository {
    private urls :any = {
        all: '/api/events',
        get: '/api/events/:eventId',
        add: '/api/events',
        edit: '/api/events/:eventId'
    }

    static $inject = [
        '$http',
        '$q'
    ];

    constructor(private $http: HttpService, private $q: IQService) {
    }

    all(): IPromise<Array<Event>> {
        return this.$q((resolve) => {
            resolve(this.$http.get(this.urls.all));
        });

    } 

    get(event: string): IPromise<Event> {
        return this.$q((resolve) => {
            resolve(this.$http.get(this.urls.get.replace(':eventId', event)));
        });
    }
}

export = EventRepository;


///**
//		 * Find event by identifier
//		 *
//		 * @param string identifier
//		 */
//this.get = function (event, successCallback) {
//    $http.get(this.urls.get.replace(':eventId', event))
//        .success(function (eventDTO) {
//            successCallback(Event.createFromDTO(eventDTO));
//        });
//};

///**
// * Add event
// * @param Event event
// */
//this.add = function (event, successCallback) {
//    $http.post(this.urls.add, event)
//        .success(function (eventDTO) {
//            successCallback(Event.createFromDTO(eventDTO));
//        });
//};

//this.edit = function (event, successCallback) {
//    $http.post(this.urls.edit.replace(':eventId', event.id), event)
//        .success(function (eventDTO) {
//            successCallback(Event.createFromDTO(eventDTO));
//        });
};