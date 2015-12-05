define(["require", "exports", "../services/uuidService"], function (require, exports, UuidService) {
    var Guest = (function () {
        function Guest(name, contribution, comment, canceled, id) {
            if (name === void 0) { name = ""; }
            if (contribution === void 0) { contribution = ""; }
            if (comment === void 0) { comment = ""; }
            if (canceled === void 0) { canceled = false; }
            if (id === void 0) { id = null; }
            this.name = name;
            this.contribution = contribution;
            this.comment = comment;
            this.canceled = canceled;
            this.id = id;
            this.editMode = false;
            this.id = id || UuidService.getRandomUuid();
        }
        Guest.createFromDto = function (jsonData) {
            return new Guest(jsonData.name, jsonData.contribution, jsonData.comment, jsonData.canceled, jsonData.id);
        };
        return Guest;
    })();
    return Guest;
});
