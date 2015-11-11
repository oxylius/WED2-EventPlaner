define(['app/services/uuidService'], function (UUIDService) {
    'use strict';

    var Guest = function (id, name, contribution, comment, canceled) {
        this.id = id || UUIDService.getRandomUuid(),
        this.name = name,
        this.contribution = contribution,
        this.comment = comment,
        this.canceled = false;
    };

    Guest.CreateFromDTO = function (jsonData) {
        return new Guest(
            jsonData.id,
            jsonData.name,
            jsonData.contribution,
            jsonData.comment,
            jsonData.canceled
        );
    };

    return Guest;
});