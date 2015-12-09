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
        GuestRepository.prototype.add = function (eventId) {
            var _this = this;
            return this.$q(function (resolve) {
                resolve(_this.$http.post(_this.urls.add.replace(':eventId', eventId), null));
            });
        };
        GuestRepository.prototype.update = function (eventId, guest) {
            var _this = this;
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
