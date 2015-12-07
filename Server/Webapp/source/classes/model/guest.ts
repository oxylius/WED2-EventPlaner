import UuidService = require("../services/uuidService");

class Guest {
    public editMode: boolean = false;

    constructor(
        public name: string = "",
        public contribution: string = "",
        public comment: string = "",
        public canceled: boolean = false,
        public id: string = null) {
        this.id = id || UuidService.getRandomUuid();
    }

    static createFromDto = function (jsonData:any) {
        return new Guest(
            jsonData.name,
            jsonData.contribution,
            jsonData.comment,
            jsonData.canceled,
            jsonData.id
        );
    };
}

export = Guest;