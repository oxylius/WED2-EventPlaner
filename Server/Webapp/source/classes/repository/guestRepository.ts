import Guest = require("../model/guest");

import HttpService = angular.IHttpService;
import IQService = angular.IQService;
import IPromise = angular.IPromise;

class GuestRepository {
    private urls = {
        all: '/api/events/:eventId/guests',
        get: '/api/events/:eventId/guests/:guestId',
        add: '/api/events/:eventId/guests',
        update: '/api/events/:eventId/guests/:guestId'
    }

    static $inject = [
        '$http',
        '$q'
    ];

    constructor(private $http: HttpService, private $q: IQService) {
    }

    all(eventId): IPromise<Array<Guest>> {
        return this.$q((resolve) => {
            resolve(this.$http.get(this.urls.all.replace(':eventId', eventId)));
        });

    }

    add(eventId): IPromise<Guest>{
        return this.$q((resolve) => {
            resolve(this.$http.post(this.urls.add.replace(':eventId', eventId), null));
        });
    }
    
    update(eventId, guest: Guest): void {
        this.$q((resolve) => {
            resolve(this.$http.post(this.urls.update.replace(':eventId', eventId).replace(':guestId', guest.id), guest));
        });
    }

    delete(eventId, guest: Guest): IPromise<Guest> {
        guest.canceled = true;
        return this.$q((resolve) => {
            resolve(this.$http.post(this.urls.update.replace(':eventId', eventId).replace(':guestId', guest.id), guest));
        });
    } 
}

export = GuestRepository;

//define(['app/model/guest'], function (Guest) {
//	'use strict';

//	var GuestRepository = function ($http) {
//	    this.urls = {
	        
//	    };

//	    this.guests = [];


//	    /**
//		 * Get all events
//		 *
//		 * @return Guest[]
//		 */
//	    this.all = function (eventId, successCallback) {
//	        $http.get(this.urls.all.replace('{eventId}', eventId))
//				.success(function (data) {
//				    // map applys a function on every element in the array and returns the result as new array
//				    var guests = data.guests.map(function (guestDTO) {
//				        return Guest.CreateFromDTO(guestDTO);
//				    });
//				    successCallback(guests);
//				});
//	    };
//	    ///**
//		// * Find event by identifier
//		// *
//		// * @param string identifier
//		// */
//	    //this.get = function (event, successCallback) {
//	    //    $http.get(this.urls.get.replace('{eventId}', event))
//		//			.success(function (eventDTO) {
//		//			    successCallback(Event.createFromDTO(eventDTO));
//		//			});
//	    //};

//	    ///**
//		// * Add event
//		// * @param Event event
//		// */
//	    //this.add = function (event, successCallback) {
//	    //    $http.post(this.urls.add, event)
//		//			.success(function (eventDTO) {
//		//			    successCallback(Event.createFromDTO(eventDTO));
//		//			});
//	    //};

//	};
//	return GuestRepository;
//});
