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
        EventRepository.$inject = [
            '$http',
            '$q'
        ];
        return EventRepository;
    })();
    ;
    return EventRepository;
});
