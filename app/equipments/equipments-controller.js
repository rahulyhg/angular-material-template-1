(function(){

    angular
        .module('equipments')
        .controller('equipments.controller', [
            'equipments.service',
            EquipmentsController
        ]);

    function EquipmentsController( equipmentsService) {
        var self = this;
        self.equipments = [ ];

        // Load all registered about

        equipmentsService.load()
            .then( function( equipments ) {
                self.equipments    = equipments;
            });

    }

})();
