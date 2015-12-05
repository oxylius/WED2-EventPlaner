import Scope = angular.IScope;
import RouteParams = angular.route.IRouteParamsService;

import Guest = require("../../model/guest");

import GuestRepository = require("../../repository/guestRepository");

class GuestController {
    private guests: Array<Guest> = [];

    static $inject = [
        '$scope',
        '$routeParams',
        'GuestRepository'
    ];

    constructor(private scope: Scope, private routeParams: RouteParams, private guestRepository: GuestRepository) {
        guestRepository.all(this.routeParams.eventId).then((promise) => {
            promise.data.guests.forEach((guestDto: any) => {
                this.guests.push(Guest.createFromDto(guestDto));
            });
        });
    }

    delete(guest: Guest): void {
        this.guestRepository.delete(this.routeParams.eventId, guest).then((promise) => {
            this.findGuest(guest.id).canceled = true;
            console.log('deleted Guest: ' + promise.data);
        });
    }

    findGuest(id) {
    return this.guests.filter(function (guest) {
        return guest.id == id;
    })[0];
}
}

export = GuestController;