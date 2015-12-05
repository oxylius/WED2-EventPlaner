///<reference path="../typings/tsd.d.ts"/>
define(["require", "exports", "./modules/lafete"], function (require, exports, Lafete) {
    angular.element(document).ready(function () {
        angular.bootstrap(document, [Lafete.name]);
    });
});
