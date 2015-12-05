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
        GuestController.prototype.delete = function (guest) {
            var _this = this;
            this.guestRepository.delete(this.routeParams.eventId, guest).then(function (promise) {
                _this.findGuest(guest.id).canceled = true;
                console.log('deleted Guest: ' + promise.data);
            });
        };
        GuestController.prototype.findGuest = function (id) {
            return this.guests.filter(function (guest) {
                return guest.id == id;
            })[0];
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
