define(['app/model/guest'], function(Guest){
    'use strict';

    var GuestEditController = function($scope, $log, $routeParams, GuestRepository){
        this.scope = $scope;
        this.scope.editMode = false;
        if ($routeParams.guestId != null) {
            this.scope.editMode = true;
            GuestRepository.get()
        }
    }

    return GuestEditController;
})