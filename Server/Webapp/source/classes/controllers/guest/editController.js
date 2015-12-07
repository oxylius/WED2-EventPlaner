///<reference path="../../../typings/tsd.d.ts"/>
define(["require", "exports", "../../model/guest"], function (require, exports, Guest) {
    var GuestController = (function () {
        function GuestController(scope, routeParams, guestRepository) {
            var _this = this;
            this.scope = scope;
            this.routeParams = routeParams;
            this.guestRepository = guestRepository;
            this.guests = [];
            guestRepository.all(this.routeParams.eventId).then(function (promise) {
                promise.data.guests.forEach(function (guestDto) {
                    _this.guests.push(Guest.createFromDto(guestDto));
                });
            });
        }
        GuestController.prototype.add = function () {
            var _this = this;
            this.guestRepository.add(this.routeParams.eventId).then(function (promise) {
                _this.guests.push(Guest.createFromDto(promise.data));
            });
        };
        GuestController.prototype.delete = function (guest) {
            var _this = this;
            guest.canceled = true;
            this.findGuest(guest.id).canceled = true;
            this.guestRepository.update(this.routeParams.eventId, guest).then(function (promise) {
                _this.findGuest(Guest.createFromDto(promise.data).id).canceled = true;
                console.log(Guest.createFromDto(promise.data));
                console.log(_this.guests);
            });
        };
        GuestController.prototype.findGuest = function (id) {
            return this.guests.filter(function (guest) { return (guest.id == id); })[0];
        };
        GuestController.prototype.toggleEditMode = function (guest) {
            this.findGuest(guest.id).editMode = !this.findGuest(guest.id).editMode;
        };
        GuestController.prototype.save = function (guest) {
            this.guestRepository.update(this.routeParams.eventId, guest);
        };
        GuestController.$inject = [
            '$scope',
            '$routeParams',
            'GuestRepository'
        ];
        return GuestController;
    })();
    return GuestController;
});
