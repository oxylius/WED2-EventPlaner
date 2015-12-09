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
    
    update(eventId, guest: Guest): IPromise<Guest> {
        return this.$q((resolve) => {
            resolve(this.$http.post(this.urls.update.replace(':eventId', eventId).replace(':guestId', guest.id), guest));
        });
    }

    //delete(eventId, guest: Guest): IPromise<Guest> {
    //    guest.canceled = true;
    //    return this.$q((resolve) => {
    //        resolve(this.$http.post(this.urls.update.replace(':eventId', eventId).replace(':guestId', guest.id), guest));
    //    });
    //} 
}

export = GuestRepository;