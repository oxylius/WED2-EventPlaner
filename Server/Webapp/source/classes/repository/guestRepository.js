define(["require", "exports"], function (require, exports) {
    var GuestRepository = (function () {
        function GuestRepository($http, $q) {
            this.$http = $http;
            this.$q = $q;
            this.urls = {
                all: '/api/events/:eventId/guests',
                get: '/api/events/:eventId/guests/:guestId',
                add: '/api/events/:eventId/guests',
                update: '/api/events/:eventId/guests/:guestId'
            };
        }
        GuestRepository.prototype.all = function (eventId) {
            var _this = this;
            return this.$q(function (resolve) {
                resolve(_this.$http.get(_this.urls.all.replace(':eventId', eventId)));
            });
        };
        GuestRepository.prototype.delete = function (eventId, guest) {
            var _this = this;
            guest.canceled = true;
            return this.$q(function (resolve) {
                resolve(_this.$http.post(_this.urls.update.replace(':eventId', eventId).replace(':guestId', guest.id), guest));
            });
        };
        GuestRepository.$inject = [
            '$http',
            '$q'
        ];
        return GuestRepository;
    })();
    return GuestRepository;
});
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
