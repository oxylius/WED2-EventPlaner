define(["require", "exports"], function (require, exports) {
    var Location = (function () {
        function Location(name, street, zipCode, city) {
            this.name = name;
            this.street = street;
            this.zipCode = zipCode;
            this.city = city;
        }
        return Location;
    })();
    return Location;
});
