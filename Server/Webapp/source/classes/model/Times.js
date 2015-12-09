define(["require", "exports"], function (require, exports) {
    var Times = (function () {
        function Times(begin, end) {
            this.begin = new Date(begin);
            this.end = new Date(end);
        }
        return Times;
    })();
    return Times;
});
