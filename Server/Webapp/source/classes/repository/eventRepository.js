///<reference path="../../typings/tsd.d.ts"/>
define(["require", "exports"], function (require, exports) {
    var EventRepository = (function () {
        function EventRepository($http, $q) {
            this.$http = $http;
            this.$q = $q;
            this.urls = {
                all: '/api/events',
                get: '/api/events/:eventId',
                add: '/api/events',
                edit: '/api/events/:eventId'
            };
        }
        EventRepository.prototype.all = function () {
            var _this = this;
            return this.$q(function (resolve) {
                resolve(_this.$http.get(_this.urls.all));
            });
        };
        EventRepository.prototype.get = function (event) {
            var _this = this;
            return this.$q(function (resolve) {
                resolve(_this.$http.get(_this.urls.get.replace(':eventId', event)));
            });
        };
        EventRepository.prototype.add = function (event) {
            var _this = this;
            return this.$q(function (resolve) {
                resolve(_this.$http.post(_this.urls.add, event));
            });
        };
        EventRepository.$inject = [
            '$http',
            '$q'
        ];
        return EventRepository;
    })();
    return EventRepository;
});
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
