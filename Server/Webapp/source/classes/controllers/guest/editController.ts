///<reference path="../../../typings/tsd.d.ts"/>

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
    add(): void {
        this.guestRepository.add(this.routeParams.eventId).then((promise) => {
            this.guests.push(Guest.createFromDto(promise.data));
        });
    }

    delete(guest: Guest): void {
        guest.canceled = true;
        this.guestRepository.update(this.routeParams.eventId, guest).then((promise) => {
            this.findGuest(Guest.createFromDto(promise.data).id).canceled = true;
            console.log(Guest.createFromDto(promise.data));
        });
    }

    findGuest(id) {
        return this.guests.filter(function(guest) {
            return guest.id == id;
        })[0];
    }

    toggleEditMode(guest: Guest): void {
        this.findGuest(guest.id).editMode = !this.findGuest(guest.id).editMode;
    }

    save(guest: Guest): void {
        this.guestRepository.update(this.routeParams.eventId, guest);
    }}

export = GuestController;